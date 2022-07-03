import React from "react";
import { Link } from "react-router-dom";

import "./user-repos-list-item.css";

const UserReposListItem = ({ repos }) => {
    return (
        <div className="user-repos-list-item">
            <h3><Link to={`details/${repos.id}`} className="repos-link">{ repos.full_name }</Link></h3>
            <p className="lead">{ repos.language }</p>
        </div>
    );
}

export default UserReposListItem;
