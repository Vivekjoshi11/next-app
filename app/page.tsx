import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/productCard'

export default function Home(){
  return(
    <main>
      <h1>hello world</h1>
      {/* <a href='/users'>users</a>   */}
      {/* if we use ancor tag so it will load alll files and we not need that so we will use link */}
      <Link href='/users'>users</Link>
      <ProductCard/>
    </main>
  )
}
 
