import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "../pages/main-page";
import Details from "../details";

import "./app.css";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Routes>
                    <Route path="/" element={ <MainPage /> }/>
                    <Route path="/details/:id" element={ <Details /> }/>
                </Routes>
            </div>
        );
    }
}
