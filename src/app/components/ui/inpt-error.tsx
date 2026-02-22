import React from 'react'
import { cn } from '@/app/lib/utils'

const InputError = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(['block text-xs text-red-500 mt-1', className])}>
        {props.children}
      </div>
    )
  }
)

export { InputError }