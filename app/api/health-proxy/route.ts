import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const res = await fetch('https://api.biaotech.dev/api/health', {
      next: { revalidate: 0 },
    })

    if (!res.ok) {
      return NextResponse.json(
        { status: 'error', message: 'API returned non-OK status' },
        { status: res.status }
      )
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json(
      { status: 'error', message: 'Could not reach production API' },
      { status: 502 }
    )
  }
}
