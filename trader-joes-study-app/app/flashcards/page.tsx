'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

interface Flashcard {
  id: number
  image: string
  name: string
  sku: string
}

const flashcardsData: Flashcard[] = [
  { id: 1, image: '/placeholder.svg?height=300&width=300', name: 'Apple', sku: '1234' },
  { id: 2, image: '/placeholder.svg?height=300&width=300', name: 'Banana', sku: '2345' },
  { id: 3, image: '/placeholder.svg?height=300&width=300', name: 'Carrot', sku: '3456' },
  // Add more flashcards here to reach about 25
]

export default function Flashcards() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentCard, setCurrentCard] = useState(0)
  const [userInput, setUserInput] = useState('')
  const [message, setMessage] = useState('')
  const [isSkuRevealed, setIsSkuRevealed] = useState(false)
  const [flashcards, setFlashcardsData] = useState(flashcardsData)

  useEffect(() => {
    // TODO: Implement Thirdweb authentication check
    // For now, we'll simulate authentication
    setIsAuthenticated(false)
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      shuffleCards()
    }
  }, [isAuthenticated])

  const shuffleCards = () => {
    const shuffled = [...flashcardsData].sort(() => Math.random() - 0.5)
    setCurrentCard(0)
    setFlashcardsData(shuffled)
    setIsSkuRevealed(false)
    setUserInput('')
    setMessage('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userInput === flashcards[currentCard].sku) {
      setMessage('Correct! Moving to next card...')
      setTimeout(() => {
        setCurrentCard((prev) => (prev + 1) % flashcards.length)
        setUserInput('')
        setMessage('')
        setIsSkuRevealed(false)
      }, 1500)
    } else {
      setMessage('Incorrect. Try again!')
    }
  }

  const handleRevealSku = () => {
    setIsSkuRevealed(true)
    setMessage(`The correct SKU is: ${flashcards[currentCard].sku}`)
  }

  if (!isAuthenticated) {
    return (
      <main className="flex-1 p-8 flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Authentication Required</h2>
            <p className="mb-4">Please log in to access the Flashcards.</p>
            <Button className="trader-joes-button">
              Log In with Thirdweb
            </Button>
          </CardContent>
        </Card>
      </main>
    )
  }

  return (
    <div className="trader-joes-bg min-h-screen p-8 flex flex-col items-center justify-center">
      <h1 className="trader-joes-title text-center">Fruit and Veggie SKUs Flashcards</h1>
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="flex flex-col items-center p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">{flashcards[currentCard].name}</h2>
          <Image
            src={flashcards[currentCard].image}
            alt={flashcards[currentCard].name}
            width={300}
            height={300}
            className="rounded-lg"
          />
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <Input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Enter SKU"
              className="trader-joes-input text-center"
            />
            <div className="flex space-x-2">
              <Button type="submit" className="trader-joes-button flex-1">
                Submit
              </Button>
              <Button 
                type="button" 
                onClick={handleRevealSku} 
                className="trader-joes-button flex-1"
                disabled={isSkuRevealed}
              >
                Reveal SKU
              </Button>
            </div>
          </form>
          {message && (
            <p className={`mt-4 text-center ${message.includes('Correct') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </CardContent>
      </Card>
      <Button onClick={shuffleCards} className="trader-joes-button mt-4">
        Shuffle Cards
      </Button>
    </div>
  )
}

