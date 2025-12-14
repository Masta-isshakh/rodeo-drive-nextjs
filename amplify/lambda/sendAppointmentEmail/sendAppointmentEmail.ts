// lib/sendAppointmentEmail.ts
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: "us-east-1" }); // Remplace par ta région SES

export interface Appointment {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
}

export async function sendAppointmentEmail(appointment: Appointment) {
  const { name, email, phone, date, time } = appointment;

  const params = {
    Destination: {
      ToAddresses: ["mastaisshakh@gmail.com"], // ton email
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `Nouveau rendez-vous:\n\nNom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nDate: ${date}\nHeure: ${time}`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Nouvelle réservation - Rodeo Drive",
      },
    },
    Source: "no-reply@yourdomain.com", // email vérifié dans SES
  };

  try {
    await ses.send(new SendEmailCommand(params));
    return { success: true };
  } catch (err) {
    console.error("SES Error:", err);
    return { success: false, error: err };
  }
}
