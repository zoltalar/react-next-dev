import React from 'react'
import NextLink from 'next/link'
import type { IBreadcrumbItem, IBreadcrumbProps } from '@/types/component'

const Breadcrumbs: React.FC<IBreadcrumbProps> = ({
  items,
  separator = '/'
}) => {
  return (
    <nav>
      <ol className="flex items-center gap-1.5 text-sm text-gray-700">
        {items.map((item: IBreadcrumbItem, i: number) => (
          <React.Fragment key={i}>
            <li>
              {item.href && <NextLink href={item.href} className="underline hover:underline-offset-2 hover:no-underline">{item.label}</NextLink>}
              {!item.href && <span>{item.label}</span>}
            </li>
            {(i+1)<items.length && <li className="text-gray-400 ml-1 mr-1">{separator}</li>}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs