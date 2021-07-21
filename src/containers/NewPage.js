import React from 'react';
import { Link } from "react-router-dom";


const newPage = props => (<div>
    <Link to="/">Home</Link>
    <div>This is a new page</div>
</div>);

export default newPage;