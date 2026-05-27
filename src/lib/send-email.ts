import "server-only";
import nodemailer from "nodemailer";

let cachedTransporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (cachedTransporter) return cachedTransporter;
  cachedTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return cachedTransporter;
}

export interface SendEmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  fromName?: string;
}

export async function sendEmail(
  options: SendEmailOptions
): Promise<{ messageId: string }> {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error("SMTP_USER o SMTP_PASS no configurados");
  }

  const transporter = getTransporter();

  const result = await transporter.sendMail({
    from: {
      name: options.fromName || "New Biz Travel",
      address: process.env.SMTP_USER,
    },
    to: options.to,
    subject: options.subject,
    html: options.html,
    text: options.text,
    replyTo: options.replyTo,
    encoding: "utf-8",
  });

  return { messageId: result.messageId };
}
