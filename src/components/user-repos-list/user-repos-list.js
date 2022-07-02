import React, { Component } from "react";
import { connect } from "react-redux";

import UserReposListItem from "../user-repos-list-item";
import Spinner from "../spinner/spinner";

import withGitHubService from "../hoc/with-github-service";

import { reposLoaded } from "../../action/actions";

import "./user-repos-list.css";

class UserReposList extends Component {

    componentDidMount() {
        this.getDataFromService();
    }

    getDataFromService = () => {
        this.props.gitHubService.getUserRepos("LimpingCoronation")
        .then(data => {
            this.props.reposLoaded(data);
        })
        .catch(err => {
            console.log("error " + err);
        })
    }

    render() {

        if (this.props.loading) return <Spinner />;

        return (
            <div className="user-repos-list-item-wrapper">
                {
                    this.props.repos.map(({ id ,full_name, html_url, language }) => {
                        return <UserReposListItem key={ id } repos= { { full_name: full_name, html_url: html_url, language: language } } />
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        repos: state.repos,
        loading: state.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reposLoaded: (data) => dispatch(reposLoaded(data))
    }
}

export default withGitHubService(connect(mapStateToProps, mapDispatchToProps)(UserReposList))
