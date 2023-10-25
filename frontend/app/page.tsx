import Image from 'next/image'
import Navbaar from '@/components/layout/Navbaar'
import Card from '@/components/Card'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
      <> 
        <Navbaar/>
        <div>
          <Card/>
        </div>
        <Footer/>
      </>
  )
}
