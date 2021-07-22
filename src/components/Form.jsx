import React, { useState }  from 'react';

import axios from 'axios';
import { navigate } from '@reach/router';


const Form = props => {
    const{handleSubmit, onChangeHandler, myForm, errors} = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" onChange={onChangeHandler} value={myForm.title}/>
                    {
                        errors.title ? <span>{errors.title.message}</span> : ""
                    }
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" onChange={onChangeHandler} value={myForm.price}/>
                    {
                        errors.title ? <span>{errors.price.message}</span> : ""
                    }
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" onChange={onChangeHandler} value={myForm.description}>{myForm.description}</textarea>
                    {
                        errors.title ? <span>{errors.description.message}</span> : ""
                    }
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default Form;