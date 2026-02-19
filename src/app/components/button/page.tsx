'use client'

import React from 'react'
import NextLink from 'next/link'
import Button from '@/app/components/ui/button'
import Heading from '@/app/components/ui/heading'

export default function ButtonComponent() {
  return (
    <>
      <Heading color="secondary" margin="mt-5 mb-4"><code>Button</code> Component</Heading>
      <hr className="border-gray-100 mb-3" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="mb-3"><Button size="xl">Button 1</Button></div>
          <div className="mb-3"><Button size="lg">Button 2</Button></div>
          <div className="mb-3"><Button size="md">Button 3</Button></div>
          <div className="mb-3"><Button size="sm">Button 4</Button></div>
          <div><Button size="xs">Button 5</Button></div>
        </div>
        <div>
          <div className="mb-3"><Button color="primary">Button 1</Button></div>
          <div className="mb-3"><Button color="secondary">Button 2</Button></div>
          <div className="mb-3"><Button color="success">Button 3</Button></div>
          <div className="mb-3"><Button color="danger">Button 4</Button></div>
          <div className="mb-3"><Button color="warning">Button 5</Button></div>
          <div className="mb-3"><Button color="info">Button 6</Button></div>
          <div className="mb-3"><Button color="light">Button 7</Button></div>
          <div className="mb-3"><Button color="dark">Button 8</Button></div>
        </div>
      </div>
      <hr className="border-gray-100 mt-4 mb-4" />
      <NextLink href="/components" className="inline-block px-4 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 shadow-sm">Back</NextLink>
    </>    
  )
}