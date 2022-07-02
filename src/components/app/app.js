import React, { Component } from "react";

import Header from "../header";
import Search from "../search";
import UserReposList from "../user-repos-list/user-repos-list";

import "./app.css";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Search total={ 5 } />
                <UserReposList />
            </div>
        );
    }
}
