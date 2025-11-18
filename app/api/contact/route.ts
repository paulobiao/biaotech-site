import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(5),
});

export async function POST(req: NextRequest) {
  try {
    const bodyText = await req.text();        // ← Vercel precisa disso
    const body = JSON.parse(bodyText || "{}");

    const data = contactSchema.parse(body);

    console.log("📩 Nova mensagem:", data);

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Error:", error);

    if (error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form data.",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}
