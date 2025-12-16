import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const schema = z.object({
  name: z.string().min(2),
  organization: z.string().optional().or(z.literal('')),
  email: z.string().email(),
  area: z.string().optional().or(z.literal('')),
  details: z.string().min(10),
})

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_SECURE,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_FROM_EMAIL,
      CONTACT_TO_EMAIL,
    } = process.env

    const missing = [
      !SMTP_HOST && 'SMTP_HOST',
      !SMTP_PORT && 'SMTP_PORT',
      !SMTP_SECURE && 'SMTP_SECURE',
      !SMTP_USER && 'SMTP_USER',
      !SMTP_PASS && 'SMTP_PASS',
      !CONTACT_FROM_EMAIL && 'CONTACT_FROM_EMAIL',
      !CONTACT_TO_EMAIL && 'CONTACT_TO_EMAIL',
    ].filter(Boolean)

    if (missing.length) {
      return NextResponse.json(
        {
          success: false,
          message: `Server misconfigured: Zoho SMTP env vars missing: ${missing.join(', ')}`,
        },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST!,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === 'true',
      auth: {
        user: SMTP_USER!,
        pass: SMTP_PASS!,
      },
    })

    const safeName = escapeHtml(data.name)
    const safeOrg = escapeHtml(data.organization || '')
    const safeEmail = escapeHtml(data.email)
    const safeArea = escapeHtml(data.area || '')
    const safeDetails = escapeHtml(data.details)

    const subject = `Peer Review Request — ${data.name}`

    const html = `
      <div style="font-family:ui-sans-serif,system-ui; line-height:1.5">
        <h2>New Peer Review Request</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Organization:</strong> ${safeOrg || '-'}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Area:</strong> ${safeArea || '-'}</p>
        <p><strong>Details:</strong></p>
        <pre style="white-space:pre-wrap; background:#f6f7f8; padding:12px; border-radius:8px">${safeDetails}</pre>
      </div>
    `

    const text = [
      `New Peer Review Request`,
      `Name: ${data.name}`,
      `Organization: ${data.organization || '-'}`,
      `Email: ${data.email}`,
      `Area: ${data.area || '-'}`,
      ``,
      `Details:`,
      data.details,
    ].join('\n')

    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL!,
      to: CONTACT_TO_EMAIL!,
      subject,
      replyTo: data.email, // responder vai direto para quem preencheu
      text,
      html,
    })

    return NextResponse.json(
      { success: true, message: 'Request sent successfully.' },
      { status: 200 }
    )
  } catch (err: any) {
    // Zod validation
    if (err?.name === 'ZodError') {
      return NextResponse.json(
        { success: false, message: 'Invalid form data.' },
        { status: 400 }
      )
    }

    console.error('Peer review request error:', err)
    return NextResponse.json(
      { success: false, message: 'Failed to send email. Please try again.' },
      { status: 500 }
    )
  }
}
