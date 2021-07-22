import Form from '../components/Form';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Home = props => {
    const [allProducts, setAllProducts] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setAllProducts(res.data))
            .catch(err => console.log(err))
    },[])
    return (
        <div>
            <h1>Home</h1>
            <h2>Products</h2>
            <ul>
                {
                    allProducts ?
                    allProducts.map((product, i) => {
                        return <li key={i}>{product.title} <Link to={`/product/${product._id}`}><button>Details</button></Link></li>
                    })
                    : <li>none</li>
                }
            </ul>
        </div>
    );
}

export default Home;