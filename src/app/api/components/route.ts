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
    description: '<code>Breadcrumbs</code> navigation component'
  },
  {
    id: 3,
    name: 'Modal',
    slug: 'modal',
    description: '<code>Modal</code> component utilizing the <code>&lt;dialog&gt;</code> tag'
  }
]

export async function GET() {
  return NextResponse.json<IComponent[]>(collection, { status: 200 })
}