import NextLink from 'next/link'

export default function NavBrand() {
  return (
    <div className="flex-shrink-0">
      <NextLink href="/" className="font-semibold text-sm">React App</NextLink>
    </div>
  )
}