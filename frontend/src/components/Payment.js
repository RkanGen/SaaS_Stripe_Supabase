import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

export default function Payment({ priceId }) {
  const handlePayment = async () => {
    const stripe = await stripePromise;
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    });
    const { sessionId } = await response.json();
    stripe.redirectToCheckout({ sessionId });
  };

  return <button onClick={handlePayment}>Subscribe</button>;
}
