import React from 'react';
import {ArrowRight, ChevronDown, Download, Facebook, Github, Instagram, Twitter} from 'lucide-react';
import Button from '@/Comps/Button';
import {AnimatedBorderButton} from '@/Comps/AnimatedBorderButton'
import {motion} from 'framer-motion';
import { fadeIn } from '@/assets/motion';

const skills =[
  'React',
  'Next js',
  'Typescript',
  'Node js',
  'Graph',
  'PostgreSQL',
  'MangoDB',
  'Redis',
  'Docker',
  'AWS',
  'Vercel',
  'Tailwind CSS',
  'Prisma',
  'Jest',
  'Cypress',
  'Figma',
  'Git',
  'GitHub Actions'
];


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
            <motion.span 
            variants={fadeIn('down', 0.3)} 
            initial="hidden"
            whileInView="show"
            
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
              <span className='w-2 h-2 bg-primary rounded-full animate-pulse'/>
              Software Engineer . React Specialist
            </motion.span>
          </div>

          {/* Headline */}

          <motion.div 
          variants={fadeIn('right', 0.3)} 
          initial="hidden"
          whileInView="show"
          
          className='space-y-4'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
              Crafting <span className='text-primary glow-text'>digital</span>
              <br/>
              experience with
              <br/>
              <span className='font-serif italic font-normal text-white'>
                precision
              </span>
            </h1>
            <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
              Hi, I'm Samuel Junior Magori- a software engineer specializing in
              React, Next.js, and Typescript. i bring scalable, performant web 
              applications that users love 
            </p>
          </motion.div>

          {/* CTAs */}

          <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
            <Button size="lg">
              <a href= "#contact">
                  Contact Me
              </a>
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-all'/>
            </Button>

              <AnimatedBorderButton>
                <Download className="w-5 h-5"/>
                    Download CV
              </AnimatedBorderButton>
          </div>

          {/* social links*/}

          <motion.div 
            variants={fadeIn('left', 0.3)} 
            initial="hidden"
            whileInView="show"
          
          
          className='flex items-center gap-2 animate-fade-in animation-delay-400'>
            <span className='text-sm text-muted-foreground'>Follow:</span>
            {[
              {icon:Github, href:"#"},
              {icon:Instagram, href:"#"},
              {icon:Facebook, href:"#"},
              {icon:Twitter, href:"#"},
            ].map((social, idx)=>(
              <a
               key={idx} 
               href={social.href}
               className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary'
               >
                {<social.icon/>}
              </a>
            ))}
          </motion.div>
        </div>

        {/* right column - profile image*/}

        <div className='relative animate-fade-in animation-delay-300'>

          {/* profile image*/}

          <div className='relative max-w-md mx-auto'>
            <div
            className='absolute inset-0 rounded-3xl bg-gradient-to-br 
            from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse'
            />
            <motion.div 
              variants={fadeIn('left', 0.3)} 
              initial="hidden"
              whileInView="show"
        
            
              className='relative glass rounded-3xl p-2 glow-border'>
              <img src='/sam.jpg' alt='Sam profile picture' className='w-full aspect-[4/5] object-cover rounded-2xl'/>

              {/* Floating Badge*/}

              <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                <div className='flex items-center gap-3'>
                  <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
                  <span className='text-sm font-medium'>Available for work</span>
                </div>
              </div>

              {/* stats Badge */}
              <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float'>
                <div className='text-2xl font-bold text-primary'>5+</div>
                <div className='text-xs text-muted-foreground'>Years Exp.</div>
              </div>

            </motion.div>
          </div>


        </div>
      </div>

      {/* skills section */}

      <motion.div 
      variants={fadeIn('left', 0.3)} 
      initial="hidden"
      whileInView="show"
      
      className='mt-20 animate-fade-in animation-delay-300'>
        <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies i work with</p>
        <div className='relative overflow-hidden'>
          <div className='flex animate-marquee'>
            {[...skills, ...skills].map((skill, idx)=>(
              <div key={idx} className='flex-shrink-0 px-8 py-4'>
                <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>

    <div className='absolute bottom-8 left-1/2 -translate-x-1/2 
    animate-fade-in animation-delay-800'>
      <a 
      href='#about' 
      className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary'
      >
        <span className='text-xs uppercase tracking-wider'>Scroll</span>
        <ChevronDown className='w-6 h-6 animate-bounce'/>

      </a>
    </div>
    </section>
  )
}

export default Hero
