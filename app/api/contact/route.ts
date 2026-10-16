import { NextRequest, NextResponse } from 'next/server'
import { z, ZodError } from 'zod'
import nodemailer from 'nodemailer'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional().or(z.literal('')),
  phone: z.string().optional().or(z.literal('')),
  subject: z.string().optional().or(z.literal('')),
  message: z.string().min(5),
})

const SMTP_VARS = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_SECURE', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_FROM_EMAIL', 'CONTACT_TO_EMAIL'] as const

function escapeHtml(input: string) {
  return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')
}

/** Sends the message over the configured SMTP account. Success is reported only after the mail server accepts it. */
export async function POST(req: NextRequest) {
  let data: z.infer<typeof contactSchema>
  try {
    data = contactSchema.parse(await req.json())
  } catch (error) {
    const message = error instanceof ZodError ? 'Invalid form data.' : 'Invalid request.'
    return NextResponse.json({ success: false, message }, { status: 400 })
  }

  const env = process.env
  const missing = SMTP_VARS.filter((key) => !env[key])
  if (missing.length) {
    console.error('Contact form: SMTP not configured, missing', missing.join(', '))
    return NextResponse.json({ success: false, message: 'Email delivery is not configured.' }, { status: 503 })
  }

  const fields: [string, string | undefined][] = [
    ['Name', data.name],
    ['Email', data.email],
    ['Company', data.company],
    ['Phone', data.phone],
    ['Subject', data.subject],
  ]

  try {
    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: Number(env.SMTP_PORT),
      secure: env.SMTP_SECURE === 'true',
      auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
    })

    await transporter.sendMail({
      from: env.CONTACT_FROM_EMAIL,
      to: env.CONTACT_TO_EMAIL,
      replyTo: data.email,
      subject: `Portfolio contact — ${data.subject || data.name}`,
      text: [...fields.map(([k, v]) => `${k}: ${v || '-'}`), '', data.message].join('\n'),
      html: `<div style="font-family:ui-sans-serif,system-ui;line-height:1.5">
        ${fields.map(([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(v || '-')}</p>`).join('')}
        <pre style="white-space:pre-wrap;background:#f6f7f8;padding:12px;border-radius:8px">${escapeHtml(data.message)}</pre>
      </div>`,
    })
  } catch (error) {
    console.error('Contact form: SMTP send failed', error)
    return NextResponse.json({ success: false, message: 'The message could not be delivered.' }, { status: 502 })
  }

  return NextResponse.json({ success: true, message: 'Message sent.' }, { status: 200 })
}
