'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface NavigationProps {
  children: React.ReactNode
}

const Navigation: React.FC<NavigationProps> = ({
  children
}) => {
  const refNavigation = useRef<HTMLDivElement|null>(null)
  const animateNavigation = (): void => {
    if ( ! refNavigation.current) {
      return
    }
    const links = refNavigation.current?.querySelectorAll('.nav-link')
    gsap.set([...Array.from(links)], {
      opacity: 0, 
      y: -15
    })
    const timeline = gsap.timeline({ delay: .5 })
    links.forEach((link) => {
      timeline.to(link, {
        opacity: 1,
        y: 0,
        duration: 0.125,
        ease: "power2.out"
      })
    })
  }
  useEffect(() => {
    animateNavigation()
  }, [])
  return (
    <nav className="w-full bg-white flex items-center justify-between py-2 h-[3rem]" ref={refNavigation}>
      {children}
    </nav>
  )
}

export default Navigation