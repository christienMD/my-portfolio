import PortfolioEmailTemplate from "@/emails/PortfolioEmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  try {
    const { email, subject, message } = await request.json();

    const transport = nodemailer.createTransport(
      smtpTransport({
        service: "gmail",
        secureConnection: true,
        port: 465,
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.MY_PASSWORD,
        },
      })
    );

    const mailOptions: Mail.Options = {
      from: email,
      to: process.env.MY_EMAIL,
      // cc: email, (uncomment this line if you want to send a copy to the sender)
      subject: `<p className='font-bold'>Message from ${subject} (${email})</p>`,
      text: message,
    };

    const infos = await transport.sendMail(mailOptions);
    console.log("Email sent");
    return NextResponse.json(infos);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send email." });
  }
}
