'use client'

import { useState } from 'react'
import ChatInterface from './chat-interface'
import TweetEditor from './tweet-editor'
import { motion } from 'framer-motion'

export default function TweetStudio() {
  const [tweetContent, setTweetContent] = useState('')

  const handleInsertFromChat = (content: string) => {
    setTweetContent(content)
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChatInterface onInsertTweet={handleInsertFromChat} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <TweetEditor content={tweetContent} onChange={setTweetContent} />
      </motion.div>
    </div>
  )
}
