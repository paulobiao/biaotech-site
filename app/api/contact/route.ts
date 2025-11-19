import { NextRequest, NextResponse } from 'next/server'
import { z, ZodError } from 'zod'

// ✅ Validação dos dados do formulário
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional().or(z.literal('')),
  phone: z.string().optional().or(z.literal('')),
  subject: z.string().optional().or(z.literal('')),
  message: z.string().min(5),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // valida o body
    const data = contactSchema.parse(body)

    // 🔎 Por enquanto só vamos logar no servidor (Vercel Logs)
    console.log('📩 Nova mensagem de contato:', data)

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully.',
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Contact form submission error:', error)

    // erro de validação (campos inválidos)
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form data.',
          errors: error.errors,
        },
        { status: 400 },
      )
    }

    // erro genérico
    return NextResponse.json(
      {
        success: false,
        message:
          'An error occurred while sending your message. Please try again.',
      },
      { status: 500 },
    )
  }
}
