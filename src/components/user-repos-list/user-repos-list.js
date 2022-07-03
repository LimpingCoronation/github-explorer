import React, { Component } from "react";
import { connect } from "react-redux";

import UserReposListItem from "../user-repos-list-item";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

import withGitHubService from "../hoc/with-github-service";

import { reposLoaded, reposFailed } from "../../action/actions";

import "./user-repos-list.css";

class UserReposList extends Component {

    componentDidMount() {
        this.getDataFromService();
    }

    getDataFromService = () => {
        this.props.gitHubService.getUserRepos(this.props.user)
        .then(data => {
            this.props.reposLoaded(data);
        })
        .catch(() => {
            this.props.reposFailed()
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user || this.props.loading) {
            this.getDataFromService();
        }
    }

    render() {

        const { repos = [] } = this.props;

        if (this.props.loading) return <Spinner />;

        if (this.props.errorReposLoaded) return <ErrorIndicator />;

        if (!this.props.user) {
            return null;
        }

        if (typeof this.props.repos === "object" && this.props.repos.hasOwnProperty("message")) {
            return <h1 className="display-6">Not Found</h1>;
        }

        if (this.props.repos.length === 0) {
            return <h2>This user has no repositories</h2>;
        }

        return (
            <div className="user-repos-list-item-wrapper">
                {
                    repos.map(({ id = "" ,full_name = "", html_url = "", language = "" }) => {
                        return <UserReposListItem key={ id } repos= { { full_name: full_name, html_url: html_url, language: language, id: id } } />
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
        errorReposLoaded: state.errorReposLoaded,
        user: state.user,
        message: state.message,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reposLoaded: (data) => dispatch(reposLoaded(data)),
        reposFailed: () => dispatch(reposFailed),
    }
}

export default withGitHubService(connect(mapStateToProps, mapDispatchToProps)(UserReposList));
