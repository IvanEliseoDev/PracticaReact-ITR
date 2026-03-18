import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

interface RadioButtonProps {
    options: string[]
}
export const CustomRadioButton = ({ options }: RadioButtonProps) => {
    return (
        <div>
            <RadioGroup defaultValue="comfortable" className="w-fit">
                {options.length === 0 ? (
                    <div className="flex items-center gap-3">
                        <p>No hay opciones</p>
                    </div>
                ) : (
                    options.map((items) => (
                        <div className="flex items-center gap-3">
                            <RadioGroupItem value={items} id="r1" />
                            <Label htmlFor="r1">{items}</Label>
                        </div>
                    ))
                )}
            </RadioGroup>
        </div>
    )
}
