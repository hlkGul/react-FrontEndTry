import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'
export default function HgTextInput({ ...props }) {
    const [field, meta] = useField()
    return (
        // !! ifadesi metni boolean yapar js tarz
        <FormField error={meta.touched && !!meta.error}>
            <input {...field} {...props} />
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>

            ):null}
        </FormField>

    )
}
