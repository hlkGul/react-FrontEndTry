import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from "yup"
import { FormField , Button} from 'semantic-ui-react'

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }
    const schema = Yup.object({
        productName: Yup.string().required("Urun adı zorunlu"),
        unitPrice: Yup.number().required("urun fiyatı zorunlu")
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit = {(values)=>{
                    //burada axios kullanarak yakaladıgımız degerlerimizi backende yoolarız
                    
                }}
            >
                <Form className = "ui form">
                    <FormField >
                        <Field name="productName" placeholder="Urun adı"></Field>
                    </FormField>
                    <FormField>
                        <Field name="unitPrice" placeholder="Birim Fiyatı"></Field>

                    </FormField>
                    <Button color ="green" type ="submit">Ekle</Button>
                </Form>
            </Formik>

        </div>
    )
}
