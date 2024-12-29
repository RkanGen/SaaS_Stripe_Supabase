# AI-Driven Customer Support SaaS

This is a SaaS platform that enables businesses to automate their customer support using AI-powered chatbots. The platform integrates with existing systems to provide 24/7 customer support, reduce response times, and enhance customer satisfaction.

## Features

- **AI Chatbot**: Handles customer inquiries using OpenAI's GPT models.
- **Multi-Channel Support**: Compatible with live chat, email, and other channels.
- **Authentication**: Secure user authentication with Supabase.
- **Subscription Management**: Integrated with Stripe for paywall and subscription plans.
- **Dashboard**: Manage chatbots, view analytics, and configure settings using a clean and modern UI built with ShadCN UI.

---

## Tech Stack

### Frontend

- Vite.js
- React.js
- ShadCN UI

### Backend

- Node.js
- Express.js
- Supabase

### APIs

- OpenAI GPT for chatbot intelligence.
- Stripe for payment and subscription management.

---

## Installation

### Prerequisites

- Node.js and npm installed.
- Supabase account and project setup.
- Stripe account and products created.
- OpenAI API key.

---

### 1. Clone the Repository

```bash
git clone https://github.com/RkanGen/SaaS_Stripe_Supabase.git
cd SaaS_Stripe_Supabase

```

---

### 2. Set Up Environment Variables

Create a `.env` file in both the `frontend/` and `backend/` directories and add the following variables:

#### Frontend (`frontend/.env`)

```
VITE_SUPABASE_URL=<YOUR_SUPABASE_URL>
VITE_SUPABASE_ANON_KEY=<YOUR_SUPABASE_ANON_KEY>
VITE_STRIPE_PUBLIC_KEY=<YOUR_STRIPE_PUBLIC_KEY>
```

#### Backend (`backend/.env`)

```
STRIPE_SECRET_KEY=<YOUR_STRIPE_SECRET_KEY>
OPENAI_API_KEY=<YOUR_OPENAI_API_KEY>
```

---

### 3. Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

---

### 4. Run the Application

#### Frontend

```bash
cd frontend
npm run dev
```

#### Backend

```bash
cd backend
node server.js
```

---

## Usage

### 1. Authentication

Users can sign up or log in using their email. Supabase handles authentication and user sessions.

### 2. Chatbot

Users can interact with the AI chatbot via the dashboard. The chatbot generates responses using OpenAI's GPT model.

### 3. Subscription Management

Stripe integration allows users to choose and subscribe to a pricing plan. Users are redirected to Stripe Checkout for payment.

---

## Deployment

### Frontend Deployment

1. Deploy on Vercel or Netlify.
2. Add the environment variables from `frontend/.env` in the deployment settings.

### Backend Deployment

1. Deploy the Express server using Render, Railway, or any other hosting provider.
2. Add the environment variables from `backend/.env` in the hosting provider's settings.

---

## Directory Structure

```
ai-customer-support-saas/
├── frontend/
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # React components (Auth, Chat, Payment)
│   │   ├── context/       # Auth context
│   │   ├── App.js         # Main application
│   │   ├── supabase.js    # Supabase client setup
├── backend/
│   ├── server.js          # Express server
│   ├── chatbot.js         # Chatbot logic using OpenAI
│   ├── .env               # Backend environment variables
└── README.md              # Project documentation
```

---

## API Endpoints

### Backend Endpoints

#### POST /api/create-checkout-session

Creates a Stripe Checkout session for subscription.

**Request Body:**

```json
{
  "priceId": "price_XXXXXXXXXX"
}
```

**Response:**

```json
{
  "sessionId": "cs_test_XXXXXXXXXX"
}
```

#### GET /api/chatbot-response

Generates an AI response for a given query (to be implemented later).

**Request Body:**

```json
{
  "message": "How can I reset my password?"
}
```

**Response:**

```json
{
  "response": "To reset your password, go to the settings page and click 'Reset Password'."
}
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Create a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
