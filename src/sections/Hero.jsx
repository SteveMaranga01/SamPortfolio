import React from 'react'

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>

      {/*Bg*/}

    <div className='absolute inset-0'>
      <img src="/hero-bg.jpg" alt='Hero Image'
      className='w-full h-full object-cover opacity-40'/>
      <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background'></div>
    </div>

    {/*green dots*/}

    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {[...Array(30)].map((_, i) => (
        <div key={i} className='absolute w-1.5 h-1.5 rounded-full opacity-60' style={{
            background: "#20B2A6",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `slow-drift ${20 + Math.random() * 30}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
        }}/>
      ))}
    </div>
    {/* Content */}

    <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
      <div className='grid lg:grid-cols-2 gap-12 items-center'>

        {/* Left Column - Text content */}
        <div className='space-y-8'>
          <div className='animate-fade-in'>
            <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
              <span className='w-2 h-2 bg-primary rounded-full animate-pulse'/>
              Software Engineer . React Specialist
            </span>
          </div>

          {/* Headline */}

          <div>
            <h1>
              Crafting <span className='text-primary glow-text'>digital</span>
              <br/>
              experience with
              <br/>
              <span className='font-serif italic font-normal text-white'>
                precision
              </span>
            </h1>
          </div>
        </div>

        {/* right column - profile image*/}
      </div>
    </div>
    </section>
  )
}

export default Hero
