import React from "react";

import logo from "./github-icon.png";
import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <img src={ logo } alt="logo" />
            <h1>GitHub Explorer</h1>
        </div>
    )
}

export default Header;
