const express = require('express');
const stripe = require('stripe')('<YOUR_STRIPE_SECRET_KEY>');
const app = express();

app.post('/api/create-checkout-session', async (req, res) => {
  const { planId } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{ price: planId, quantity: 1 }],
    mode: 'subscription',
    success_url: '<YOUR_SUCCESS_URL>',
    cancel_url: '<YOUR_CANCEL_URL>',
  });
  res.json({ id: session.id });
});
