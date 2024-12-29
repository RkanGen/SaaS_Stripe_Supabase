import { Configuration, OpenAIApi } from 'openai';

const openai = new OpenAIApi(
  new Configuration({ apiKey: 'YOUR_OPENAI_API_KEY' })
);

export async function getAIResponse(message) {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: message,
    max_tokens: 100,
  });

  return response.data.choices[0].text.trim();}
