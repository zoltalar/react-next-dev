import React from 'react'
import { cn } from '@/app/lib/utils'

const FormGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(['form-group', className])} {...props}>
      {children}
    </div>
  )
})

export { FormGroup }