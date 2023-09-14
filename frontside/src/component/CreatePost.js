import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../css/CreatePost.css";
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost(){

    let navigate = useNavigate()

    const initialValue = {
        title: "",
        postText: "",
        username: ""
    }

    const onSubmit = async(data) => {
        await axios.post("http://localhost:3001/posts", data);
        navigate("/")
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required()
    })

    return(
        <Formik className="formik" initialValues={initialValue} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className="form">
                <label className="label">Title: </label>
                <ErrorMessage name="title" component="span" />
                <Field className="field"
                    id="inputCreatePost"
                    name="title"
                    placeholder="something"
                />
                <label className="label">Post: </label>
                <ErrorMessage name="postText" component="span" />
                <Field className="field"
                    id="inputCreatePost"
                    name="postText"
                    placeholder="bla bla"
                />
                <label className="label">Name: </label>
                <ErrorMessage name="username" component="span" />
                <Field className="field"
                    id="inputCreatePost"
                    name="username"
                    placeholder="John Wick"
                />
                <button type="submit" className="form-button">Create Post</button>
            </Form>
        </Formik>
    )
}

export default CreatePost