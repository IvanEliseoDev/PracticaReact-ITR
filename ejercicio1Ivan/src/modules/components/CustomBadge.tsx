import { Badge } from "@/components/ui/badge"

interface BadgeProps {
    title: string
    variant: 'link' | 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost'
}

export const CustomBadge = ({ title, variant = 'default' }: BadgeProps) => {
    return (
        <>
            <div className="m-4 p-2">
                <Badge variant={variant}>{title}</Badge>
            </div>

        </>
    )
}
