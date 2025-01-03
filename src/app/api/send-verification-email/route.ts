
import { VerifyEmailTemplate } from "@/components/EmailTemplate/verify-email";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_KEY);
const recipientEmail = process.env.RECIPIENT_EMAIL ?? " ";
export async function POST(request: Request) {
  const { firstName, email, verificationUrl } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Medicare <onboarding@resend.dev>",
      to: recipientEmail,//[email],
      subject: "Verify your email",
      react: VerifyEmailTemplate({ firstName, verificationUrl }),
    });

    if (error) {
      console.log(error);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    console.log(error);

    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}