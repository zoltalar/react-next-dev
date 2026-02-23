import React from 'react'
import { cn } from '@/app/lib/utils'
import type { IInputProps } from '@/types/component'

const Input = React.forwardRef<
  HTMLInputElement,
  IInputProps
>(
  ({ className, type = 'text', inputSize = 'lg', ...props }, ref) => {
    const sizes = {
      xs: 'px-2 py-1 text-xs/4 gap-1',
      sm: 'px-2.5 py-1.5 text-sm/4 gap-1.5',
      md: 'px-2.5 py-1.5 text-base/5 gap-1.5',
      lg: 'px-3 py-2 text-base/5 gap-2',
      xl: 'px-3 py-2 text-base gap-2'
    }
    const classes = [
      'block border border-gray-200 hover:border-gray-400 focus:border-gray-400 w-full outline-none rounded-sm transition-colors',
      sizes[inputSize],
      className
    ]
    return (
      <input
        type={type}
        ref={ref}
        className={cn(classes)}
        {...props} 
      />
    )
})

Input.displayName = 'Input'

export { Input }