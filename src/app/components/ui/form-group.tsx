import React from 'react'
import { cn } from '@/app/lib/utils'

const FormGroup: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn(['form-group', className])} {...props}>
      {children}
    </div>
  )
}

export default FormGroup