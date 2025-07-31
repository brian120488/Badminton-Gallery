import { redirect } from 'next/navigation'
import { stripe } from '@/lib/stripe'

export default async function ReturnPage({ params }: { params: Promise<{ sessionId: string }> }) {
  const { sessionId } = await params;

  if (!sessionId)
    throw new Error('Please provide a valid sessionId (`cs_test_...`)')

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'payment_intent'],
  })

  const status = session.status;
  const customerEmail = session.customer_details?.email;

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    return (
      <div className='mx-64 py-8'>
        <span>
          We appreciate your business! A confirmation email will be sent to{' '}
          {customerEmail}. If you have any questions, please email{' '}
        </span>
        <a href="mailto:support@badmintongallery.us">support@badmintongallery.us</a>.
      </div>
    )
  }
}