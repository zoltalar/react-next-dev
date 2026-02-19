import React from 'react'
import { clsx } from 'clsx'
import type { IButtonProps } from '@/types/component'

const Button: React.FC<IButtonProps> = ({
  children,
  color = 'primary',
  size = 'md',
  command,
  commandfor
}) => {
  const colors = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-500 text-white',
    success: 'bg-green-500 text-white',
    danger: 'bg-red-500 text-white',
    warning: 'bg-orange-500 text-white',
    info: 'bg-cyan-500 text-black',
    light: 'bg-gray-100 text-black',
    dark: 'bg-gray-900 text-white'
  }
  const slots = {
    base: 'rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors'
  }
  const sizes = {
    xs: {
      base: 'px-2 py-1 text-xs gap-1'
    },
    sm: {
      base: 'px-2.5 py-1.5 text-xs gap-1.5'
    },
    md: {
      base: 'px-2.5 py-1.5 text-sm gap-1.5'
    },
    lg: {
      base: 'px-3 py-2 text-sm gap-2'
    },
    xl: {
      base: 'px-3 py-2 text-base gap-2'
    }
  }
  const buttonClasses = clsx([
    colors[color],
    slots.base,
    sizes[size].base
  ])
  return (
    <button
      command={command}
      commandfor={commandfor}
      className={buttonClasses}
    >
      {children}
    </button>
  )
}

export default Button