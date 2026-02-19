import NextLink from 'next/link'
import Heading from '@/app/components/ui/heading'

export default async function HeadingComponent() {
  return (
    <>
      <Heading color="secondary" margin="mt-5 mb-4"><code>Heading</code> Component</Heading>
      <hr className="border-gray-100 mb-3" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <Heading size="2xl">Heading 1</Heading>
          <Heading size="xl">Heading 2</Heading>
          <Heading size="lg">Heading 3</Heading>
          <Heading size="md">Heading 4</Heading>
          <Heading size="sm">Heading 5</Heading>
          <Heading size="xs">Heading 6</Heading>
        </div>
        <div>
          <Heading color="primary" size="2xl">Heading 1</Heading>
          <Heading color="secondary" size="xl">Heading 2</Heading>
          <Heading color="success" size="lg">Heading 3</Heading>
          <Heading color="danger" size="md">Heading 4</Heading>
          <Heading color="warning" size="sm">Heading 5</Heading>
          <Heading color="info" size="xs">Heading 6</Heading>
        </div>
        <div>
          <Heading color="secondary" size="2xl" weight="bold">Heading 1</Heading>
          <Heading color="secondary" size="xl" weight="semibold">Heading 2</Heading>
          <Heading color="secondary" size="lg" weight="normal">Heading 3</Heading>
          <Heading color="secondary" size="md" weight="light">Heading 4</Heading>
          <Heading color="secondary" size="sm" weight="extralight">Heading 5</Heading>
          <Heading color="secondary" size="xs" weight="thin">Heading 6</Heading>
        </div>
      </div>
      <hr className="border-gray-100 mt-4 mb-4" />
      <NextLink href="/components" className="inline-block px-4 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 shadow-sm">Back</NextLink>
    </>    
  )
}