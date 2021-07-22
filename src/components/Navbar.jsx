import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Navbar = props => {
    return (
        <div>
            <Link to='/'>Home</Link><span> </span>
            <Link to='/product/add'>Add</Link>
        </div>
    );
}

export default Navbar;