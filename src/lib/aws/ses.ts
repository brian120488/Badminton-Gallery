import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail(to: string, subject: string, html: string) {
  try {
    const res = await resend.emails.send({
      from: 'Badminton Gallery <support@badmintongallery.us>',
      to,
      subject,
      html,
    });

    console.log('✅ Email sent via Resend:', res);
  } catch (err) {
    console.error('❌ Error sending email via Resend:', err);
  }
}
