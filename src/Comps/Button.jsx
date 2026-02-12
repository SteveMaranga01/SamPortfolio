import React from 'react'
import { fadeIn } from '@/assets/motion';
import {motion} from 'framer-motion';

const Button = React.forwardRef (({ className = '', size = 'md', children, ...props }, ref) => {
  const baseClasses =
    'relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25'
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  }
  const classes = `${baseClasses} ${sizeClasses[size] ?? sizeClasses.md} ${className}`.trim()

  return (
    <motion.button 
    variants={fadeIn('down', 0.4)} 
    initial="hidden"
    whileInView="show"
    
    type="button" className={classes} {...props} ref={ref}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  )
})

export default Button
