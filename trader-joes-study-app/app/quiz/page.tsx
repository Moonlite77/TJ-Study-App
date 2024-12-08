'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Quiz() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // TODO: Implement Thirdweb authentication check
    // For now, we'll simulate authentication
    setIsAuthenticated(false)
  }, [])

  if (!isAuthenticated) {
    return (
      <main className="flex-1 p-8 flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Authentication Required</h2>
            <p className="mb-4">Please log in to access the Fruit and Veggie Quiz.</p>
            <Button className="trader-joes-button">
              Log In with Thirdweb
            </Button>
          </CardContent>
        </Card>
      </main>
    )
  }

  return (
    <main className="flex-1 p-8">
      <h1 className="trader-joes-title text-center">Fruit and Veggie Quiz</h1>
      {/* TODO: Implement quiz functionality */}
      <p className="text-center">Quiz content coming soon!</p>
    </main>
  )
}

