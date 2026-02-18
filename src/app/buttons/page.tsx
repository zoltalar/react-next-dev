'use client'

import React, { useState } from 'react'
import Button from '../components/ui/button'

export default function Buttons() {
  return (
    <section className="container mx-auto px-4 py-4">
      <Button variant="primary" size="sm">Button 1</Button>
      <Button variant="secondary" size="sm">Button 2</Button>
    </section>
  )
}