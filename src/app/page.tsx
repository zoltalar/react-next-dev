'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type TFloatingImage = {
  src: string,
  alt: string,
  ring: number,
  startAngle: number,
  endAngle: number,
  size: number,
  delay?: number
}

gsap.registerPlugin(ScrollTrigger)

const ringRadii: number[] = [220, 320, 420, 520]

const floatingImages: TFloatingImage[] = [
  {
    src: '/img/tree.jpg',
    alt: 'Tree',
    ring: 0,
    startAngle: 0,
    endAngle: 45,
    size: 80
  },
  {
    src: '/img/lake.jpg',
    alt: 'Lake',
    ring: 1,
    startAngle: 180,
    endAngle: 205,
    size: 70
  },
  {
    src: '/img/nature.jpg',
    alt: 'Nature',
    ring: 2,
    startAngle: 45,
    endAngle: 75,
    size: 70
  }
]

const centerX = 600
const centerY = 600
const durations = [10, 12, 15, 20, 24]

const randomDuration = (): number => {
  const index = Math.floor(Math.random() * durations.length)
  return durations[index]
}
const toRadians = (degrees: number): number => {
  return degrees * Math.PI / 180
}

export default function Home() {
  const refFloatingImages = useRef<(HTMLDivElement|null)[]>([])
  useEffect(() => {
    refFloatingImages.current.forEach((image: HTMLDivElement|null, i) => {
      if ( ! image) {
        return
      }
      const floatingImage = floatingImages[i]
      const radius = ringRadii[floatingImage.ring]
      const startAngle = floatingImage.startAngle
      const endAngle = floatingImage.endAngle
      gsap.to(image, {
        duration: randomDuration(),
        repeat: -1,
        yoyo: true,
        ease: 'none',
        onUpdate: function() {
          const progress = this.progress()
          const angle = startAngle + (progress * (endAngle - startAngle))
          const radians = toRadians(angle)
          const x = centerX + radius * Math.cos(radians) - floatingImage.size / 2
          const y = centerY + radius * Math.sin(radians) - floatingImage.size / 2
          gsap.set(image, { left: x, top: y })
        }
      })
    })
  })
  return (
    <div className="relative overflow-hidden h-[calc(100vh-3rem)]">
      <div>
        <svg 
          className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: '1200px', height: '1200px' }}
          viewBox="0 0 1200 1200"
          fill="none"
        >
          {ringRadii.map((radius: number, i: number) => (
            <circle
              key={i}
              cx={centerX}
              cy={centerY}
              r={radius}
              stroke="#ccc"
              strokeWidth="1.5"
              fill="none"
              opacity={0.7 - i * 0.1}
            />
          ))}
        </svg>
      </div>
      <div
        className="absolute top-1/2 -translate-y-1/2 pointer-events-none" 
        style={{ width: '1200px', height: '1200px' }}
      >
        {floatingImages.map((floatingImage: TFloatingImage, i: number) => {
          const radius = ringRadii[floatingImage.ring]
          const radians = toRadians(floatingImage.startAngle)
          const x = Math.floor(centerX + radius * Math.cos(radians) - floatingImage.size / 2)
          const y = Math.floor(centerY + radius * Math.sin(radians) - floatingImage.size / 2)
          return (
            <div
              key={i}
              ref={(el) => { refFloatingImages.current[i] = el }}
              className="absolute overflow-hidden shadow-lg"
              style={{
                left: x,
                top: y,
                width: floatingImage.size,
                height: floatingImage.size
              }}
            >
              <img
                src={floatingImage.src}
                alt={floatingImage.alt}
                className="rounded w-full h-full object-cover"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
