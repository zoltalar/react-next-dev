'use client'

import React from 'react'
import { cn } from '@/app/lib/utils'
import type { IHeadingProps } from '@/types/component'

const Heading = React.forwardRef<
  HTMLHeadingElement,
  IHeadingProps
>(({
  color = 'primary', size = 'md', weight = 'medium', margin = 'mb-3', className, children, ...props }, ref) => {
  const colors = {
    'primary': 'text-blue-500',
    'secondary': 'text-gray-700',
    'success': 'text-green-500',
    'danger': 'text-red-500',
    'warning': 'text-orange-500',
    'info': 'text-cyan-500',
    'light': 'text-zinc-100',
    'dark': 'text-gray-900'
  }
  const textClass = (): string => {
    if (size === 'md') {
      return 'text-base'
    }
    return `text-${size}`
  }
  const classes = [
    textClass(),
    `font-${weight}`,
    colors[color],
    margin,
    className
  ]
  const renderTag = () => {
    switch (size) {
      case 'xs':
        return <h6 ref={ref} className={cn(classes)} {...props}>{children}</h6>
      case 'sm':
        return <h5 ref={ref} className={cn(classes)} {...props}>{children}</h5>
      case 'md':
        return <h4 ref={ref} className={cn(classes)} {...props}>{children}</h4>
      case 'lg':
        return <h3 ref={ref} className={cn(classes)} {...props}>{children}</h3>
      case 'xl':
        return <h2 ref={ref} className={cn(classes)} {...props}>{children}</h2>
      case '2xl':
        return <h1 ref={ref} className={cn(classes)} {...props}>{children}</h1>
    }
  }
  return renderTag()
})

export { Heading }