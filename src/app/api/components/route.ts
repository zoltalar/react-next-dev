import { NextResponse } from 'next/server'
import type { IComponent } from '@/types/component'

const collection: IComponent[] = [
  {
    id: 1,
    name: 'Heading',
    slug: 'heading',
    description: 'Simple <code>h1</code> to <code>h6</code> heading component'
  },
  {
    id: 2,
    name: 'Breadcrumbs',
    slug: 'breadcrumbs',
    description: '<code>breadcrumbs</code> navigation component'
  },
]

export async function GET() {
  return NextResponse.json<IComponent[]>(collection, { status: 200 })
}