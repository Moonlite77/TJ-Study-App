'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { BookOpen, ClipboardList, Award, ShoppingBag, Heart } from 'lucide-react'

export default function Home() {
  const router = useRouter()

  const handleStudyOption = (option: string) => {
    router.push(`/${option}`)
  }

  return (
    <div className="trader-joes-bg min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-6xl font-extrabold text-red-600 mb-12 tracking-tight trader-joes-title">
        TJ's Study App
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => handleStudyOption('flashcards')}>
          <CardContent className="p-8 flex flex-col items-center">
            <BookOpen size={48} className="text-red-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Fruit and Veggie Flashcards</h2>
            <p className="text-center text-gray-600">Practice your produce knowledge</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => handleStudyOption('fruit-veggie-quiz')}>
          <CardContent className="p-8 flex flex-col items-center">
            <ClipboardList size={48} className="text-red-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Fruit and Veggie Quiz</h2>
            <p className="text-center text-gray-600">Test your produce knowledge</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => handleStudyOption('operations-quiz')}>
          <CardContent className="p-8 flex flex-col items-center">
            <ClipboardList size={48} className="text-red-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Advanced Operations Quiz</h2>
            <p className="text-center text-gray-600">Test your operational expertise</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => handleStudyOption('leaderboards')}>
          <CardContent className="p-8 flex flex-col items-center">
            <Award size={48} className="text-red-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Leaderboards</h2>
            <p className="text-center text-gray-600">See how you rank among your peers</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => handleStudyOption('gear')}>
          <CardContent className="p-8 flex flex-col items-center">
            <ShoppingBag size={48} className="text-red-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Recommended Gear</h2>
            <p className="text-center text-gray-600">Check out essential TJ's equipment</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => handleStudyOption('donations')}>
          <CardContent className="p-8 flex flex-col items-center">
            <Heart size={48} className="text-red-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Donations</h2>
            <p className="text-center text-gray-600">Learn about our community support</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

