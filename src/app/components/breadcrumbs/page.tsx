import NextLink from 'next/link'
import Breadcrumbs from '@/app/components/ui/breadcrumbs'
import Heading from '@/app/components/ui/heading'
import type { IBreadcrumbItem } from '@/types/component'

export default async function BreadcrumbsComponent() {
  const breadcrumbItems: IBreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Sample Component' }
  ]
  return (
    <>
      <Heading color="secondary" margin="mt-5 mb-4"><code>Breadcrumbs</code> Component</Heading>
      <hr className="border-gray-100 mb-3" />
      <Breadcrumbs items={breadcrumbItems} />
      <Breadcrumbs items={breadcrumbItems} separator=">" />
      <Breadcrumbs items={breadcrumbItems} separator="&rarr;" />
      <hr className="border-gray-100 mt-4 mb-4" />
      <NextLink href="/components" className="inline-block px-4 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 shadow-sm">Back</NextLink>
    </>    
  )
}