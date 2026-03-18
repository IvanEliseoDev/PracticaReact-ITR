import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SelectProps {
    placeHolder: string
    title: string
    items: string[]
}

export const CustomSelect = ({ placeHolder, title, items }: SelectProps) => {
    return (
        <div className="m-3">
            <Select >
                <SelectTrigger className="w-full h-20">
                    <SelectValue placeholder={placeHolder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel >{title}</SelectLabel>
                        {items.length === 0 ? (
                            <SelectItem value="none">
                                No hay opciones
                            </SelectItem>
                        ) : (
                            items.map((item) => (
                                <SelectItem key={item} value={item}>
                                    {item}
                                </SelectItem>
                            ))
                        )}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
