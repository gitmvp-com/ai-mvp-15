'use client'

import { useState, useEffect } from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Copy, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

interface TweetEditorProps {
  content: string
  onChange: (content: string) => void
}

const MAX_CHARS = 280

export default function TweetEditor({ content, onChange }: TweetEditorProps) {
  const [copied, setCopied] = useState(false)
  const charCount = content.length
  const remaining = MAX_CHARS - charCount
  const isOverLimit = remaining < 0

  const handleCopy = async () => {
    if (!content.trim()) {
      toast.error('Nothing to copy!')
      return
    }
    
    await navigator.clipboard.writeText(content)
    setCopied(true)
    toast.success('Tweet copied to clipboard!')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col h-[600px]">
      <div className="bg-gray-900 p-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg text-white">Tweet Editor</h2>
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-medium ${
                isOverLimit
                  ? 'text-red-400'
                  : remaining < 20
                  ? 'text-yellow-400'
                  : 'text-gray-400'
              }`}
            >
              {remaining}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <Textarea
          value={content}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write your tweet here or use the AI assistant..."
          className="w-full h-full resize-none border-none focus:ring-0 text-lg p-0 placeholder:text-gray-400"
        />
      </div>

      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              className={`h-full ${
                isOverLimit
                  ? 'bg-red-500'
                  : remaining < 20
                  ? 'bg-yellow-500'
                  : 'bg-indigo-600'
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${Math.min((charCount / MAX_CHARS) * 100, 100)}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>

        <Button
          onClick={handleCopy}
          disabled={!content.trim() || isOverLimit}
          className="w-full bg-gray-900 hover:bg-gray-800"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy Tweet
            </>
          )}
        </Button>

        {isOverLimit && (
          <p className="text-red-500 text-sm mt-2 text-center">
            Tweet is {Math.abs(remaining)} characters too long
          </p>
        )}
      </div>
    </div>
  )
}
