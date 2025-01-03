import { ResetPasswordTemplate } from "@/components/EmailTemplate/reset-email";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_KEY);
const recipientEmail = process.env.RECIPIENT_EMAIL ?? " ";
export async function POST(request: Request) {
  const { firstName, email, resetUrl } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Medicare <support@resend.dev>",
      to: recipientEmail ,//[email],
      subject: "Reset your password",
      react: ResetPasswordTemplate({ firstName, resetUrl }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}