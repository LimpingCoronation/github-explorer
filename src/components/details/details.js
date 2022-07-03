import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import Spinner from "../spinner/spinner";

import withGitHubService from "../hoc/with-github-service";
import withUseParams from "../hoc/with-use-params";

import { readMeFileLoaded, readMeFileFailed } from "../../action/actions";

import "./details.css";

class Details extends Component {
    getReadMe = () => {
        let repo = this.props.repos.find(item => item.id == this.props.params.id);
    
        this.props.gitHubService.getReadMeFile(this.props.user, repo.name)
        .then(data => {
            this.props.readMeFileLoaded(data);
        })
        .catch(err => {
            console.log(err)
        })
    }

    componentDidMount() {
        try {
            this.getReadMe();
        } catch {
            this.props.readMeFileFailed()
        }
    }

    render() {
    
        if (this.props.loading) return <Spinner />;
    
        if (this.props.hasError) return <Navigate to="/" />
    
        return (
            <div>
                <Link to="/">На главную</Link>
                <h2>README.md</h2>
                <pre>
                    { this.props.file }
                </pre>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        repos: state.repos,
        user: state.user,
        loading: state.details.loading,
        file: state.details.file,
        hasError: state.details.hasError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        readMeFileLoaded: (text) => dispatch(readMeFileLoaded(text)),
        readMeFileFailed: () => dispatch(readMeFileFailed)
    }
}

export default withUseParams(withGitHubService(connect(mapStateToProps, mapDispatchToProps)(Details)));
