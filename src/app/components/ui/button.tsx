import React from 'react'

interface ButtonProps {
  children: React.ReactNode,
  variant?: 'primary' | 'secondary' | 'success' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md'
}) => {
  const variants = {
    primary: 'bg-linear-65 from-blue-700 to-blue-500 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    success: 'bg-green-600 text-white hover:bg-green-700',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  }
  const sizes = {
    sm: 'px-3 py-1.5 rounded-sm text-sm',
    md: 'px-4 py-2 rounded-md text-base',
    lg: 'px-6 py-3 rounded-lg text-lg',
    xl: 'px-8 py-4 rounded-xl text-xl'
  }
  const classes = [
    variants[variant],
    sizes[size]
  ].join(' ')
  return (
    <button className={classes}>{children}</button>
  )
}

export default Button