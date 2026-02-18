import React from 'react'
import type { IBookProps } from '@/types/book'

const BookCard: React.FC<IBookProps> = ({
  book
}) => {
  return (
    <div className="book-card bg-gray-100 rounded-lg shadow-sm overflow-hidden transition-shadow duration-300">
      {book.image && <div className="h-24 lg:h-48 overflow-hidden relative group">
        <img src={book.image} className="absolute transition-transform duration-300 hover:scale-105" alt={book.title} />
      </div>}
      <div className="p-4">
        <span className="float-right px-2.5 py-0.5 rounded-full line-clamp-1 text-xs text-white font-semibold bg-red-800 mt-1">
          ${book.price}
        </span>
        <h3 className="font-semibold text-md mb-1 text-gray-700 line-clamp-1">
          {book.title}
        </h3>
        <p className="text-gray-400 text-sm mb-0">{book.author}</p>
      </div>
    </div>
  )
}

export default BookCard