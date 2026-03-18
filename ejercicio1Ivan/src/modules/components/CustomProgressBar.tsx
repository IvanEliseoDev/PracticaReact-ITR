import { Field, FieldLabel } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

const colorVariants: Record<string, string> = {
    blue: "bg-blue-400",
    red: "bg-red-400",
    green: "bg-green-400",
}

interface ProgressBarProps {
    title: string
    value: number
    color?: string
}

export const CustomProgressBar = ({ title, value, color = "blue" }: ProgressBarProps) => {
    return (
        <Field className="w-full max-w-sm m-4 p-2">
            <FieldLabel htmlFor="progress-upload">
                <span>{title}</span>
                <span className='ml-auto'>{value}%</span>
            </FieldLabel>
            <Progress value={value} id="progress-upload" className={cn(colorVariants[color] || 'bg-primary')} />
        </Field>
    )
}
