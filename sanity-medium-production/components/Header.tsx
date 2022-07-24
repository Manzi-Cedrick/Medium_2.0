import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className="flex drop-shadow-lg justify-between lg:px-[8em] h-16 text-black bg-yellow-400">
        <div>
            <Link href='/'>
                <img src="https://links.papareact.com/yvf" alt="" className='h-full w-52 object-contain'/>
            </Link>
        </div>
        <div className='flex justify-center gap-[6em]  place-content-center'>
            <div className=' py-5'>
                <ul className='md:flex hidden text-black font-semibold text-[12px] justify-between gap-6'>
                    <li>Our Story</li>
                    <li>Membership</li>
                    <li>Write</li>
                    <li>Sign In</li>
                </ul>
            </div>
            <div className='pt-2 pr-4'>
                <button className='btn text-[12px] rounded-full bg-black text-white p-3 px-10'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Header