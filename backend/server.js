const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('YOUR_SECRET_KEY');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/create-checkout-session', async (req, res) => {
  const { priceId } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  res.json({ sessionId: session.id });
});

app.listen(4242, () => console.log('Server running on port 4242'));
