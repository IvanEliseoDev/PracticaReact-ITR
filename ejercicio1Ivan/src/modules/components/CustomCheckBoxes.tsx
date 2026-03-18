
import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldContent,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"

interface checkBoxes {
    text: string
}

export const CustomCheckBoxes = ({ text }: checkBoxes) => {
    return (
        <div className="">
            <FieldGroup className="max-w-sm">

                <Field orientation="horizontal">
                    <Checkbox
                        id="terms-checkbox-1"
                        name="terms-checkbox-1"
                        defaultChecked

                    />
                    <FieldContent>
                        <FieldLabel htmlFor="terms-checkbox-1" >
                            {text}
                        </FieldLabel>
                    </FieldContent>
                </Field>

            </FieldGroup>
        </div>
    )
}
