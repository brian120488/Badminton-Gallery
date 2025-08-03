import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

export const ses = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function sendConfirmationEmail(to: string, subject: string, html: string) {
  const params = {
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: html,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject,
      },
    },
    Source: 'support@badmintongallery.us'
  };

  try {
    const command = new SendEmailCommand(params);
    await ses.send(command);
    console.log('✅ Email sent via SES');
  } catch (err) {
    console.error('❌ Error sending SES email:', err);
  }
}
