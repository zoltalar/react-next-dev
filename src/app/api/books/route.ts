import { NextResponse } from 'next/server'
import type { IBook } from '@/types/book'

const collection: IBook[] = [
  { id: 1, title: 'Mastering Vue.js', author: 'John Smith', price: 24.99, image: '/img/library.jpg' },
  { id: 2, title: 'Mastering React', author: 'Wojciech Pirog', price: 29.98, image: '/img/skiing.jpg' },
  { id: 3, title: 'PHP 8 Objects', author: 'Avram Nemetz', price: 49.99, image: '/img/yacht.jpg' }
]

export async function GET() {
  return NextResponse.json<IBook[]>(collection, { status: 200 })
}