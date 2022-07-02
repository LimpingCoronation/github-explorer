import React from "react";

import "./user-repos-list-item.css";

const UserReposListItem = ({ repos }) => {
    return (
        <div className="user-repos-list-item">
            <h3><a href={ repos.html_url } className="repos-link">{ repos.full_name }</a></h3>
            <p className="lead">{ repos.language }</p>
        </div>
    );
}

export default UserReposListItem;
