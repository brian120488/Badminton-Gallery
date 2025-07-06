// app/api/webhooks/stripe/route.ts
import { stripe } from '@/lib/stripe'
// import { sendConfirmationEmail } from '@/lib/ses'
import { NextResponse } from 'next/server'

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
    const email = session.customer_details?.email;
    console.log(email);

    // if (email) {
    //   await sendConfirmationEmail(
    //     email,
    //     'Thanks for your order!',
    //     `<h1>Order confirmed</h1><p>Hi! Your order was successfully placed. We'll follow up shortly.</p>`
    //   );
    // }
  }

  return NextResponse.json({ received: true });
}
