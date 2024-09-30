import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/productCard'
import MapWithNoFlyZone from './components/MapWithNoFlyZone'
import { Button } from './components/ui/button'

export default function Home(){
  return(
    <main>
      <h1>hello world</h1>
      {/* <a href='/users'>users</a>   */}
      {/* if we use ancor tag so it will load alll files and we not need that so we will use link */}
      <Link href='/users'>users</Link>
      <Link href='/users'>map</Link>
      <ProductCard/>
      <MapWithNoFlyZone/>
      <Button variant='default' size={'sm'} > Shad cn button example</Button>
    </main>
  )
}
 
