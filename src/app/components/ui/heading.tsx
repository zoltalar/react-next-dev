import React from 'react'
import { clsx } from 'clsx'
import type { IHeadingProps } from '@/types/component'

const Heading: React.FC<IHeadingProps> = ({
  color = 'primary',
  size = 'md',
  weight = 'medium',
  margin = 'mb-3',
  children
}) => {
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
  const classes = clsx([
    textClass(),
    `font-${weight}`,
    colors[color],
    margin
  ])
  const renderTag = () => {
    switch (size) {
      case 'xs':
        return <h6 className={classes}>{children}</h6>
      case 'sm':
        return <h5 className={classes}>{children}</h5>
      case 'md':
        return <h4 className={classes}>{children}</h4>
      case 'lg':
        return <h3 className={classes}>{children}</h3>
      case 'xl':
        return <h2 className={classes}>{children}</h2>
      case '2xl':
        return <h1 className={classes}>{children}</h1>
    }
  }
  return renderTag()
}

export default Heading