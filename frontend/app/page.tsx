import Image from 'next/image'
import Navbaar from '@/components/layout/Navbaar'
import Card from '@/components/Card'

export default function Home() {
  return (
      <> 
        <Navbaar/>
        <div>
          <Card/>
        </div>
      </>
  )
}
