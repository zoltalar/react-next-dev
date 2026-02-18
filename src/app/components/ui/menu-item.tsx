import React from 'react'
import NextLink from 'next/link'

interface MenuItemProps {
  href: string,
  children: React.ReactNode
}

const MenuItem: React.FC<MenuItemProps> = ({
  href,
  children
}) => {
  return (
    <NextLink href={href} className="nav-link text-sm text-gray-700 hover:text-gray-500 font-medium relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-600 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform duration-300">
      {children}
    </NextLink>
  )
}

export default MenuItem