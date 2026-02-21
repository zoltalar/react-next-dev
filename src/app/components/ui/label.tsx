import React from 'react'
import { cn } from '@/app/lib/utils'

const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  className,
  ...props
}) => {
  return (
    <label className={cn(['inline-block text-sm text-gray-700', className])} {...props}>{props.children}</label>
  )
}

export default Label