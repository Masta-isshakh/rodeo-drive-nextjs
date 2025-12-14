// app/api/sendAppointmentEmail/route.ts
import { NextRequest, NextResponse } from "next/server";
import { sendAppointmentEmail, type Appointment } from "@/amplify/lambda/sendAppointmentEmail/sendAppointmentEmail";

export async function POST(req: NextRequest) {
  try {
    const body: Appointment = await req.json();
    const result = await sendAppointmentEmail(body);

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
