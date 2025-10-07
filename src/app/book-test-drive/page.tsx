import Link from 'next/link'
import PageStartBanner from '@/components/PageStartBanner'
import PageEndBanner from '@/components/PageEndBanner'
import TestDriveFlow from '@/components/TestDriveFlow'
import Chip from '@/components/Chip'

export const metadata = {
  title: 'Book a Test Drive - SF Legacy Motors',
  description: 'Schedule a test drive for your next vehicle at SF Legacy Motors. Experience your future car in person with our easy booking system.',
}

export default function BookTestDrive() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Start Banner */}
      <PageStartBanner
        title="Book a Test Drive"
        description="Experience your future car in person—schedule a test drive today. Nothing beats getting behind the wheel to see how a vehicle feels and performs."
      >
        <div className="flex flex-wrap gap-3 justify-center">
          <Chip variant="overlay">Free Test Drive</Chip>
          <Chip variant="overlay">Expert Guidance</Chip>
          <Chip variant="overlay">No Commitment</Chip>
        </div>
      </PageStartBanner>

      {/* Test Drive Flow Component */}
      <TestDriveFlow />

      {/* End Banner */}
      <div className="section-padding bg-background-muted">
        <PageEndBanner
          title="Ready to Find Your Perfect Vehicle?"
          body="Browse our inventory of quality used cars and schedule your test drive today. Our team is here to help you every step of the way."
        />
      </div>
    </div>
  )
}
