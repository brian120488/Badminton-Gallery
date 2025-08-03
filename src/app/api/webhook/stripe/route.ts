// app/api/webhooks/stripe/route.ts
import { stripe } from '@/lib/stripe'
import { sendConfirmationEmail } from '@/lib/aws/ses'
import { NextResponse } from 'next/server'

import Stripe from 'stripe';

export async function buildReceiptHTMLFromSession(session: Stripe.Checkout.Session) {
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 100 });

  const itemsHTML = await Promise.all(
    lineItems.data.map(async (item) => {
      const price = await stripe.prices.retrieve(item.price!.id);
      const product = await stripe.products.retrieve(price.product as string);

      return `
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:10px 0;">${product.name}</td>
          <td style="padding:10px 0;">${item.quantity}</td>
          <td style="padding:10px 0;">$${(item.amount_total / 100).toFixed(2)}</td>
        </tr>
      `;
    })
  );

  const totalAmount = (session.amount_total ?? 0) / 100;

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px;">
      <h2 style="color:#333;">Thank you for your order!</h2>
      <p>Here’s a summary of your purchase:</p>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
        <thead>
          <tr>
            <th align="left">Item</th>
            <th align="left">Qty</th>
            <th align="left">Price</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHTML.join('')}
        </tbody>
      </table>

      <p style="margin-top:20px;font-weight:bold;">Total: $${totalAmount.toFixed(2)}</p>

      <hr style="margin:30px 0;" />
      <p>If you have any questions, reply to this email or contact us at support@badmintongallery.us</p>
    </div>
  `;

  return html;
}


export async function POST(req: Request) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')!

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }

  console.log('Event Type: ', event.type)

  if (event.type === 'checkout.session.completed') {
    
    const session = event.data.object;
    console.log(session)
    const email = session.customer_details!.email;
    const html = await buildReceiptHTMLFromSession(session);
    console.log(email)
    if (email) {
      console.log(html)
      await sendConfirmationEmail(
        email,
        'Thanks for your order!',
        html
      );
    }
  }

  return NextResponse.json({ received: true });
}
