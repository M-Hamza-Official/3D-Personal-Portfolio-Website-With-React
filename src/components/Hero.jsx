import React from 'react'


import { words } from '../constants'
import Button from './Button'



const Hero = () => {


  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'>
        <img src="./images/bg.png" alt="background" />
      </div>
      <div className='hero-layout '>
        <header className='flex flex-col items-center md:w-full w-screen md:px-20 px-5 '>
          <div className='flex flex-col gap-7'>
            <div className='hero-text'>

              <h1  >Shaping

                <span className='slide'>
                  <span className='wrapper' >
                    {words.map((word) => (
                      <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'   >
                        <img className='xl:size-12 md:size-10 size-7 md:p-2 p-1  bg-white-50 rounded-full' src={word.imgPath} alt="" />
                        <span className='px-1' >{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>

              </h1>
              <h1  >into real projects</h1>
              <h1  >that deliver results</h1>

            </div>
<p className='text-3xl' >Hi, I am Hamza, a software engineering student based in Pakistan, who loves to develop applications that solve problems.
.</p>
          </div>
<Button
className='relative w-auto flex items-center gap-3 px-6 py-3 rounded-full bg-white-50 hover:bg-white transition-all  duration-300 hover:scale-105 active:scale-95 shadow-md group'
text="see my work"
/>
        </header>
      </div>
    </section>
  )
}

export default Hero