import React from 'react'
import { Formik, Form,  } from 'formik'
import * as Yup from "yup"
import {  Button  } from 'semantic-ui-react'
import HgTextInput from '../utilities/customFormControls/HgTextInput'

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 };
  
    const schema = Yup.object({
      productName: Yup.string().required("Ürün adı zorunlu"),
      unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
    });
  
    return (
        <Formik 
        initialValues={initialValues} 
        validationSchema={schema}
        onSubmit = {(values)=>{
            console.log(values)
        }}
        >
          <Form className="ui form">
            <HgTextInput name="productName" placeholder="Ürün adı"/>
            <HgTextInput name="unitPrice" placeholder="Ürün fiyatı"/>
            <Button color="green" type="submit">Ekle</Button>
          </Form>
        </Formik>
    );
  }