import { Button } from '@/components/ui/button'
import { ClipboardCheck } from 'lucide-react'

interface ButtonProps {
    title: string
}

export const CustomButton = ({ title }: ButtonProps) => {
    return (
        <div className='flex items-center m-2'>
            <Button className='bg-blue-400' size={"lg"} ><ClipboardCheck />{title}</Button>
        </div>
    )
}
