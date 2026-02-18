import MenuItem from '@/app/components/ui/menu-item'

export default function MainMenu() {
  return (
    <div className="flex items-center gap-6 flex-shrink-0">
      <div className="flex space-x-8">
        <MenuItem href='/'>Home</MenuItem>
        <MenuItem href='/components'>Components</MenuItem>
      </div>
    </div>
  )
}