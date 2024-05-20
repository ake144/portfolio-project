import { NextRequest, NextResponse } from 'next/server';
import { Resend } from "resend";
import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, subject, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail ?? '',
      to: [fromEmail, email],
      subject: subject,
      react: EmailTemplate({ firstName: 'akeja', subject, message }),
      text: 'This is from akanji dev, thanks for contacting me.', 
    });
    if (error) {
      return NextResponse.json(error, { status: 400 });
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
