import React from 'react'


import { words } from '../constants'
import Button from './Button'
import HeroExperience from './HeroExperience'



const Hero = () => {


  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'>
        <img src="./images/bg.png" alt="background" />
      </div>
      <div className='hero-layout '>
        <header className='flex flex-col  items-start gap-4 md:w-full  md:px-20 px-5 '>
          <div className='flex flex-col gap-7 w-fit'>
            <div className='hero-text w-[50%]'>

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

<p className='text-3xl  text-start' >Hi, I am Hamza, a software engineering student based in Pakistan, who loves to develop applications that solve problems.
.</p>
            </div>
          </div>
<Button
className='relative justify-start w-auto flex items-center gap-3 px-6 py-3 rounded-full bg-white-50 hover:bg-white transition-all  duration-300 hover:scale-105 active:scale-95 shadow-md group'
text="see my work"
/>
        </header>
        {/* {3d experience} */}
        <figure>

        <div className="hero-3d-layout border-red-500 border-2">
          <HeroExperience/>
        </div>
        </figure>

      </div>
    </section>
  )
}

export default Hero