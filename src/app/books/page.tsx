'use client'

import { useEffect, useState } from 'react'
import BookCard from '@/app/components/ui/book-card'
import BookCardSkeleton from '@/app/components/ui/book-card-skeleton'
import type { IBook } from '@/types/book'

export default function Books() {
  // Hooks
  const [books, setBooks] = useState<IBook[]>([])
  const [busy, setBusy] = useState<boolean>(false)
  // Functions
  const fetchBooks = async () => {
    setBusy(true)
    const data = await (await fetch('/api/books')).json()
    setTimeout(() => {
      setBooks(data)
      setBusy(false)
    }, 1000)
  }
  useEffect(() => {
    fetchBooks()
  }, [])
  if (busy) {
    return (
      <>
        <h1 className="text-2xl font-bold mb-8 text-gray-800">Books</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <BookCardSkeleton />
          <BookCardSkeleton />
          <BookCardSkeleton />
        </div>
      </>
    )
  }
  return (
    <>
      <h1 className="text-2xl font-bold mb-8 text-gray-800">Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {books.map((book: IBook) => 
          <BookCard key={book.id} book={book} />
        )}
      </div>
    </>
  )
}