import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: `You are a helpful Twitter content assistant. Your role is to help users create engaging, concise tweets.

Guidelines:
- Keep tweets under 280 characters when suggesting content
- Be creative and engaging
- Use relevant emojis sparingly
- Suggest hooks and compelling openings
- Help users refine their ideas
- If asked to create a tweet, provide the content directly without extra explanation
- Be conversational and friendly`,
    messages,
  })

  return result.toDataStreamResponse()
}
