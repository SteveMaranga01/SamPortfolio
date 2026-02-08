import { Code2, Lightbulb, Rocket, Users } from 'lucide-react'
import React from 'react'



const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Perfomance",
    description: "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "innovation",
    description: "Staying ahead with the latest technologies and the best practices.",
  }
];

const About = () => {
  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      <div className='conatiner mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>

          {/* left Column*/}

          <div className='space-yy8'>
            <div className='animate-fade-in'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
            </div>

            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
              Building the future,
              <span className='font-serif italic font-normal text-white'>
                {" "}
                  one component at a time.</span>
            </h2>

            <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
              <p>
                I am a passionate software enginer of over 5 years of 
                experience of crafting digital products that make a difference. My 
                journey started with a curiosity for how things work on the web, and it has evolved into a deep expertise in the mordern frontend
                technologies.
              </p>
              <p>
                I specialized in react, next.js and Typscript, building 
                anything from sleek landing pages into complex enterprise 
                applications.My approach combines technical exellence with a 
                keen eye for design and user experience.
              </p>
              <p>
                when i'm coding, you will find me exploring some new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
