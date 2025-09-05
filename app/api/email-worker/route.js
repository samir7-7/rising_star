import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    const message = {
      from: `Your Name <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Country:</strong> ${body.country}</p>
        <p><strong>WhatsApp:</strong> ${body.whatsapp}</p>
        <p><strong>Subject:</strong> ${body.subject}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    };

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    await transporter.sendMail(message);

    return NextResponse.json(
      { success: true, message: "Email sent" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Email worker error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
