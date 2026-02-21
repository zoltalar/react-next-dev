'use client'

import React from 'react'
import NextLink from 'next/link'
import Button from '@/app/components/ui/button'
import Heading from '@/app/components/ui/heading'
import Modal from '@/app/components/ui/modal'
import { RegisterForm } from '@/app/components/ui/register-form'
import type { IRegisterFormImperativeHandle } from '@/types/component'

export default function ModalComponent() {
  // Vars
  const [open, setOpen] = React.useState(false)
  const formRef = React.useRef<IRegisterFormImperativeHandle>(null)
  // Functions
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
  }
  const handleReset = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    formRef.current?.reset()
  }
  // Component
  return (
    <>
      <Heading color="secondary" margin="mt-5 mb-4"><code>Modal</code> Component</Heading>
      <hr className="border-gray-100 mb-3" />
      <Button onClick={() => setOpen(true)}>
        Open Dialog 1
      </Button>
      <Modal
        open={open}
        title="Modal Dialog Title"
        footer={
          <div className="flex justify-end space-x-3">
            <Button size="lg" color="secondary" onClick={() => setOpen(false)}>Close</Button>
            <Button size="lg" color="secondary" onClick={handleReset}>Reset</Button>
            <Button size="lg" onClick={handleClick}>Submit</Button>
          </div>
        }
        onClose={() => setOpen(false)}
      >
        <p className="text-sm text-gray-600 mb-3">This is a centered dialog component built with the HTML dialog element and Tailwind CSS. It's automatically centered both vertically and horizontally.</p>
        <RegisterForm ref={formRef} />
      </Modal>
      <hr className="border-gray-100 mt-4 mb-4" />
      <NextLink href="/components" className="inline-block px-4 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 shadow-sm">Back</NextLink>
    </>    
  )
}