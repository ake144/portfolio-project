import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email template as HTML
const getEmailTemplate = (userEmail: string, subject: string, message: string) => `
  <div>
    <h1>New message from your portfolio site</h1>
    <p><strong>Email:</strong> ${userEmail}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong> ${message}</p>
  </div>
`;

export async function POST(req: NextRequest) {
  const { email, subject, message } = await req.json();  // User's form data

  console.log('Sending email from:', email);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,   // Your email address
      pass: process.env.EMAIL_PASS,   // App password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,    // From your email
    to: process.env.EMAIL_USER,      // To your email (you will receive the emails)
    subject: `Message from ${email}: ${subject}`,  // Email subject will include user's email and subject
    html: getEmailTemplate(email, subject, message), // HTML email body
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email', error }, { status: 500 });
  }
}
