import React from 'react';

import Counter from "./counter";
import "./index.css"

const navbar = props => {
    const { count } = props;
    return (
        <header className="navbar__container">
            <h1>React Keep</h1>
            <Counter count={count} />
        </header>
    )
};

export default navbar;