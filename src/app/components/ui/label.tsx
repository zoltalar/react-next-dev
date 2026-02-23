import React from 'react'
import { cn } from '@/app/lib/utils'

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(
  ({ className, ...props }, ref) => {
    const classes = [
      'inline-block text-sm text-gray-700',
      className
    ]
    return (
      <label ref={ref} className={cn(classes)} {...props}>
        {props.children}
      </label>
    )
  }
)

export { Label }