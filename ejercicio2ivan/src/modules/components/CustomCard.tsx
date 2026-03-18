import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface CardProps {
    name: string,
    age: number,
    profesion: string,
    city: string
}
export const CustomCard = ({ name, age, profesion, city }: CardProps) => {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src="https://avatar.vercel.sh/shadcn1"
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
                <CardTitle>Yo soy {name}</CardTitle>
                <p>con: {age} años</p>
                <CardDescription>
                    Mi profesion es: {profesion}, y vivo en la ciudad de : {city}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">Ver Mas</Button>
            </CardFooter>
        </Card>
    )
}
