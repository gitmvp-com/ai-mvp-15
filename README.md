# AI Tweet Creator MVP

A simplified version of [Contentport](https://github.com/joschan21/contentport) - An AI-powered tweet creation assistant.

## Features

✨ **AI-Powered Tweet Generation** - Generate tweet ideas and content with AI assistance

📝 **Tweet Editor** - Simple, intuitive editor with character count

💬 **Chat Interface** - Conversational AI to help you craft perfect tweets

🎨 **Clean UI** - Modern, responsive design inspired by the original Contentport

## Getting Started

### Prerequisites

- Node.js 18+ installed
- An OpenAI API key (get one at https://platform.openai.com/api-keys)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gitmvp-com/ai-mvp-15.git
cd ai-mvp-15
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables:
```bash
cp .env.example .env
```

4. Add your OpenAI API key to `.env`:
```
OPENAI_API_KEY=your_actual_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## How to Use

1. **Start a conversation** with the AI about what you want to tweet about
2. **Get AI suggestions** for tweet content based on your topic
3. **Edit and refine** the generated content in the tweet editor
4. **Copy** your final tweet to post on Twitter/X

## Tech Stack

- **Next.js 15.3** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3.4** - Styling
- **AI SDK** - AI integration
- **OpenAI GPT-4** - AI model
- **Framer Motion** - Animations

## Differences from Original Contentport

This MVP focuses on the core tweet creation feature and removes:

❌ Authentication (no login required)
❌ Database (no data persistence)
❌ Twitter API integration (no posting)
❌ Scheduling & Queue management
❌ Multi-account support
❌ Topic monitoring
❌ Analytics

## Original Project

This is a simplified MVP version of [Contentport by joschan21](https://github.com/joschan21/contentport).

## License

MIT
