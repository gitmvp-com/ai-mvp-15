import TweetStudio from "@/components/tweet-studio"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            AI Tweet Creator
          </h1>
          <p className="text-gray-600">
            Create engaging tweets with AI assistance
          </p>
        </header>
        <TweetStudio />
      </div>
    </main>
  )
}
