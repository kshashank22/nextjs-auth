import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Link href={"/login"}>
    <div className="text-center text-red-700">Welcome to Home Page</div>
    </Link>
  )
}
