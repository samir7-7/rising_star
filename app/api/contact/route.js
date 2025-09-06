// app/api/contact/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    // Build payload safely
    const payload = {
      name: body.name || "",
      email: body.email || "",
      country: body.country || "",
      whatsapp: body.whatsapp || "",
      subject: body.subject || "",
      message: body.message || "",
      secret: process.env.FORM_SECRET, // match Apps Script secret
    };

    // Send data to Google Apps Script Web App
    const res = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // Handle non-200 or HTML responses
    const text = await res.text();
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
    console.error("Error saving form data:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
