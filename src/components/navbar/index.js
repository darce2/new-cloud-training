import React from 'react';
import { Link } from "react-router-dom";

import Counter from "./counter";
import "./index.css"

const navbar = props => {
    const { count } = props;
    return (
        <header className="navbar__container">
            <h1>React Keep</h1>
            <Link style={{color: "white"}} to="/page">NewPage</Link>
            <Counter count={count} />
        </header>
    )
};

export default navbar;