import Form from '../components/Form';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Detail = props => {
    const [oneProduct, setOneProduct] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props._id}`)
            .then(res => setOneProduct(res.data))
            .catch(err => console.log(err))
    }, [])
    const deleteProduct = _id =>{
        axios.delete(`http://localhost:8000/api/product/delete/${_id}`)
            .then(() => navigate("/"))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>detail page</h1>
            {
                oneProduct ? <> 
                    <h1>{oneProduct.title}</h1>
                    <h3>${oneProduct.price}</h3>
                    <h4>Description:</h4>
                    <p>{oneProduct.description}</p>
                    <button onClick={() => navigate(`/product/update/${oneProduct._id}`)}>Edit</button><span> </span><button onClick={() => deleteProduct(oneProduct._id)}>Delete</button>
                </> : ''
            }

        </div>
    );
}

export default Detail;