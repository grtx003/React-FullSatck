import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registr() {

    const navigate = useNavigate()

    const initialValue = {
        username: "",
        password: ""
    }


    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(8).required()
    })

    const onSubmit = async(data) => {
        await axios.post("http://localhost:3001/auth", data);
        navigate("/")
    }

  return (
    <Formik className="formik" initialValues={initialValue} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className="form">
                <label className="label">Username: </label>
                <ErrorMessage name="username" component="span" />
                <Field className="field"
                    id="inputCreatePost"
                    name="username"
                    placeholder="something"
                />
                <label className="label">Password: </label>
                <ErrorMessage name="password" component="span" />
                <Field className="field"
                    id="inputCreatePost"
                    name="password"
                    placeholder="bla bla"
                />
                <button type="submit" className="form-button">Create Account</button>
            </Form>
        </Formik>
  )
}

export default Registr