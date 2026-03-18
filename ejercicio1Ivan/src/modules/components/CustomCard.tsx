
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface CardProps {
    title: string
    urlimg?: string
    description: string
    action: string
}
export const CustomCard = ({ title, urlimg = "https://avatar.vercel.sh/shadcn1", description, action }: CardProps) => {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0 mb-2">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src={urlimg}
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">{action}</Button>
            </CardFooter>
        </Card>
    )
}
