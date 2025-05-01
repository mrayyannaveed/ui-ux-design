import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center gap-12 min-h-screen bg-gray-100'>
      <section className=' w-1/3'>
        <Image className='w-80' src={"/login/fb.svg"} alt='fb' width={500} height={500}/>
          <p className='text-2xl mx-7'>Facebook helps you connect and share with the people in your life.</p>
      </section>
      <section className='flex flex-col bg-white px-8 py-5 gap-4 rounded-lg shadow-2xl'>
        <input className='text-[18px] px-5 py-4 outline-blue-600 rounded-lg border border-gray-300' type="email" placeholder='Email address or phone number'/>
        <input className='text-[18px] px-5 py-4 outline-blue-600 rounded-lg border border-gray-300' type="password" placeholder='Password'/>
        <button className='bg-[#0866ff] hover:bg-[#0776ff] active:bg-blue-600 rounded-lg text-white font-bold text-xl px-4 py-3 w-[350px] cursor-pointer'>Log in</button>
        <Link href={"/"} className='text-[#0866ff] hover:underline hover:underline-offset-2 mx-auto'>Forgotten password?</Link>
        <hr className='text-gray-300'/>
        <button className='bg-[#42b72a] cursor-pointer my-2 hover:bg-green-500 active:bg-green-600 mx-auto text-white text-[17px] px-4 py-4 rounded-lg w-72'>Create new account</button>
      </section>
    </div>
  )
}

export default Login