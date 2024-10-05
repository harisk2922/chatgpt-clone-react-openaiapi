import { OpenAI } from 'openai';
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function sendMsgToOpenAI(message) {
  try {
    const res = await openai.chat.completions.create({
      model: 'gpt-4',  
      messages: [{ role: 'user', content: message }],
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    });

    return res.choices[0].message.content;
  } catch (error) {
    console.error('Error with OpenAI API request:', error);
    return "Error occurred, please try again later.";
  }
}
