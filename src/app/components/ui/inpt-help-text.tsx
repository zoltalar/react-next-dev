import React from 'react'
import { cn } from '@/app/lib/utils'
import type { IInputHelpTextProps } from '@/types/component'

const InputHelpText = React.forwardRef<
  HTMLDivElement,
  IInputHelpTextProps
>(
  ({ className, defaultText = '', ...props }, ref) => {
    const errored = (props.children ? true : false)
    const classes = [
      'block text-xs text-gray-500 mt-1',
      (errored ? 'text-red-500' : null),
      className
    ]
    return (
      <div ref={ref} className={cn(classes)}>
        {props.children || defaultText}
      </div>
    )
  }
)

export { InputHelpText }