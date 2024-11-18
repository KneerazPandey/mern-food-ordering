import { Separator } from '@/components/ui/separator'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className='text-orange-500' />
        </SheetTrigger>
        <SheetContent className='space-y-4'>
            <SheetTitle>
                <span>Welcome to MernEats.com!</span>
            </SheetTitle>
            <Separator />
            <SheetDescription className='flex'>
                <Button className='flex-1 font-bold bg-orange-500'>Log In</Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav