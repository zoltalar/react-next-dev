import React from 'react'
import { clsx } from 'clsx'
import Heading from '@/app/components/ui/heading'
import type { IModalProps } from '@/types/component'

const Modal: React.FC<IModalProps> = ({
  id,
  title,
  backdrop = 'bg-gray-700/25',
  size = 'md',
  footer,
  children
}) => {
  const dialogClasses = clsx([
    'w-full open:flex bg-transparent',
    (backdrop ? 'backdrop:' + backdrop : '')
  ])
  const sizes = {
    'sm': 'max-w-md',
    'md': 'max-w-xl',
    'lg': 'max-w-3xl',
    'xl': 'max-w-5xl'
  }
  const containerClasses = clsx([
    'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    sizes[size]
  ])
  return (
    <dialog id={id} className={dialogClasses}>
      <div className={containerClasses}>
        <div className="bg-white shadow-sm rounded">
          <div className="flex justify-between items-center p-4 bg-gray-50 border-b border-gray-100 rounded-t">
            <Heading color="secondary" size="sm" weight="semibold" margin="mb-0">{title}</Heading>
            <button className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" commandfor={id} command="close">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-4">
            {children}
          </div>
          {footer && <div className="p-4 bg-gray-50 border-t border-gray-100 rounded-b">{footer}</div>}
        </div>
      </div>
    </dialog>
  )
}

export default Modal