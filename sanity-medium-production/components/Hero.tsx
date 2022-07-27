import React from 'react'

function Hero() {
  return (
    <div className="flex border-b-2 sm:px-4 border-t-2 px-1 border-solid border-black lg:px-[8em] justify-between  bg-yellow-400 h-[60vh]">
        <div className="flex flex-col gap-6 justify-center">
            <p className=" font-serif text-[2em] sm:text-[4em] lg:text-[8em] text-black">Stay Curios.</p>
            <p className="font-semibold pr-12 font-sans">Discover stories, thinking, and expertise from writers on any topic. The Medium publication logo is the image which appears at the top of all your publication's stories.  The Medium publication logo is the image which appears at the top of all your publication's stories. </p>
            <button className="btn bg-black text-white p-6 w-52 rounded-full drop-shadow-lg ">Start Reading</button>
        </div>
        <div className="lg:flex hidden">
            <img src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="" />
        </div>
    </div>
  )
}

export default Hero