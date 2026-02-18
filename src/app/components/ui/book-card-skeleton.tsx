const BookCardSkeleton = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="h-24 lg:h-48 bg-gray-200 animate-pulse" />
      <div className="py-2">
        <div className="rounded-md h-6 bg-gray-200 animate-pulse" />
      </div>
      <div className="pb-2">
        <div className="rounded-md h-4 bg-gray-200 animate-pulse" />
      </div>
    </div>
  )
}

export default BookCardSkeleton