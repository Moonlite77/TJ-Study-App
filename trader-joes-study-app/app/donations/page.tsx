'use client'

import { Card, CardContent } from '@/components/ui/card'

export default function Donations() {
  return (
    <div className="trader-joes-bg min-h-screen p-8 flex flex-col items-center">
      <h1 className="trader-joes-title text-center mb-8">Trader Joe's Donations</h1>
      <Card className="w-full max-w-3xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Our Commitment to the Community</h2>
          <p className="mb-4">
            At Trader Joe's, we're committed to giving back to our communities. We donate 100% of products that go unsold but remain fit to enjoy to our neighbors in need.
          </p>
          <p className="mb-4">
            Our Donation Coordinators work with local food banks, food pantries, and soup kitchens to arrange for regular pick-ups of these products.
          </p>
          <h3 className="text-xl font-bold mb-2">How You Can Help</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Volunteer at local food banks</li>
            <li>Participate in community food drives</li>
            <li>Spread awareness about food insecurity</li>
          </ul>
          <p>
            Together, we can make a difference in our communities and reduce food waste.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

