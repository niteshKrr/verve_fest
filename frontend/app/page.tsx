import Image from 'next/image'
import Navbaar from '@/components/layout/Navbaar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export default function Home() {
  return (
      <> 
        <Navbaar/>
        <div>
          <div>
          <Link className="text-red-500 grid place-items-center h-screen" href="/all_events">
            All events.... 🥳
        </Link>
          </div>
        </div>
      </>
  )
}
