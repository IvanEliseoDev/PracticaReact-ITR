
import { Input } from "@/components/ui/input"

interface InputProps {
    placeholder: string
    type: "text" | "password"
}


export const CustomInput = ({ placeholder, type }: InputProps) => {

    return (
        <div className="flex justify-center items-center sm-2">
            <Input type={type} className="border-blue-400" placeholder={placeholder} />
        </div>
    )
}
