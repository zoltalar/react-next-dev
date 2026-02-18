import NextLink from 'next/link'
import Heading from '@/app/components/ui/heading'
import type { IComponent } from '@/types/component'

export default async function Components() {
  const components: IComponent[] = await (await fetch('http://localhost:3000/api/components')).json()
  return (
    <>
      <Heading variant="secondary" margin="mt-5 mb-5">Components</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {components.map((component: IComponent) => (
          <NextLink
            key={component.id}
            href={`/components/${component.slug}`}
            className="bg-zinc-100 border border-zinc-200 p-4 rounded-sm transition-colors hover:bg-white"
          >
            <p className="font-bold text-sm mb-1">{component.name}</p>
            <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: component.description }}></p>
          </NextLink>
        ))}
      </div>
    </>    
  )
}