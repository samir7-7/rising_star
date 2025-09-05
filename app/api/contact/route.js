import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend({ apiKey: process.env.RESEND_API_KEY });

export async function POST(request) {
  try {
    const body = await request.json();

    // Basic validation
    if (
      !body.name ||
      !body.email ||
      !body.country ||
      !body.whatsapp ||
      !body.subject ||
      !body.message
    ) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission: ${body.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Country:</strong> ${body.country}</p>
        <p><strong>WhatsApp:</strong> ${body.whatsapp}</p>
        <p><strong>Subject:</strong> ${body.subject}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
