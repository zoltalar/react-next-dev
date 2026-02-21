import React from 'react'
import { cn } from '@/app/lib/utils'

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'>
>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(['block border border-gray-200 hover:border-gray-400 focus:border-gray-400 w-full p-2 rounded-sm outline-none text-sm', className])}
        {...props} 
      />
    )
})

Input.displayName = 'Input'

export { Input }