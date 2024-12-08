'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Leaderboards() {
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
            <p className="mb-4">Please log in to view the Leaderboards.</p>
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
      <h1 className="trader-joes-title text-center">Leaderboards</h1>
      {/* TODO: Implement leaderboards functionality */}
      <p className="text-center">Leaderboards content coming soon!</p>
    </main>
  )
}

