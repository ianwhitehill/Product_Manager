import Form from '../components/Form';
import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Add = props => {
    const [myForm, setMyForm] = useState({
        title: "",
        price: 0,
        description: "",
    })
    const [errors, setErrors] = useState({});
    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product/create", myForm)
            .then(res => {
                if(res.data.err) {
                    console.log("There were errors!");
                    setErrors(res.data.err.errors)
                } else {
                    console.log("It worked!!");
                    navigate("/");
                }
            })
            .catch(err => console.log("Something went wrong with the post request!", err))
    }
    // const [myForm, setMyForm] = useState({
    //     title: "",
    //     
    //     description: ""
    // })
    // const [errors, setErrors] = useState({});
    // const handleSubmit = e => {
    //     e.prevent.Default();
    //     console.log('made it here')
    //     axios.post("http://localhost:8000/api/product/create")
    //         .then(() => navigate("/"))
    //         .catch(err => console.log("ERR in post to create product", err))
    // }
    // const onChangeHandler = e =>{
    //     setMyForm({...myForm, [e.target.name]: e.target.value})
    // }
    return (
        <div>
            <h1>Add Product</h1>
            <Form handleSubmit={handleSubmit} onChangeHandler={onChangeHandler} myForm={myForm} errors={errors}/>
        </div>
    );
}
export default Add;