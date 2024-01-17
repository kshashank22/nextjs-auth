"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const makeApiCall=async()=>{
    await fetch('pages/api/example',{
      method:"POST",
      body:JSON.stringify({hello:"World"})
    })
  }
  return (
    <>
    <Link href={"/login"}>
    <div className="text-center text-red-700">Welcome to Home Page</div>
    </Link>
    <button onClick={makeApiCall}>API</button>
    </>
  )
}
