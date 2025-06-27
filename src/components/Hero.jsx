import React from 'react'






const Hero = () => {

    
  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src="./images/bg.png" alt="background" />
        </div>
        <div className='hero-side '>
<header className='flex flex-col items-center md:w-full w-screen md:px-20 px-5 '>
<div className='flex flex-col gap-7'>
<div className='text-hero'>

<h1  className='text-2xl' >Shaping</h1>
<h1  className='text-2xl' >into real projects</h1>
<h1  className='text-2xl' >that deliver results</h1>


</div>
</div>

</header>
        </div>
    </section>
  )
}

export default Hero