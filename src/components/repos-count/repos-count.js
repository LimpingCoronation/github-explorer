import React, { useEffect } from "react";
import { connect } from "react-redux";

import { userReposCountLoaded } from "../../action/actions";
import withGitHubService from "../hoc/with-github-service";

import "./repos-count.css"

const ReposCount = (props) => {
    useEffect(() => {
        props.gitHubService.getUser(props.user)
        .then(data => {
            props.userReposCountLoaded(data.public_repos);
        })
    }, [props.user])

    const { count = 0 } = props

    return <h5 className="text-muted mt10">Repositories: { count }</h5>
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userReposCountLoaded: (user) => dispatch(userReposCountLoaded(user))
    }
}

export default withGitHubService(connect(mapStateToProps, mapDispatchToProps)(ReposCount));
