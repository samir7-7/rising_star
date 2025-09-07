// app/api/contact/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const payload = {
      name: body.name || "",
      email: body.email || "",
      country: body.country || "",
      whatsapp: body.whatsapp || "",
      subject: body.subject || "",
      message: body.message || "",
      secret: process.env.FORM_SECRET,
    };

    console.log("📤 Sending payload:", payload);

    const formBody = new URLSearchParams(payload).toString();

    const res = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody,
    });

    const text = await res.text();
    console.log("📥 Raw response from Apps Script:", text);

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      throw new Error(`Invalid response from Apps Script: ${text}`);
    }

    if (!res.ok || !result.success) {
      throw new Error(result.error || "Failed to save form data");
    }

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("❌ Error in Next.js API route:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
