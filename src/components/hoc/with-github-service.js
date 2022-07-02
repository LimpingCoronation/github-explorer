import React from "react";

import GitHubServiceContext from "../../contexts/github-service-context";

const withGitHubService = (Comp) => {
    return (props) => {
        return (
            <GitHubServiceContext.Consumer>
                {
                    (gitHubService) => {
                        return <Comp gitHubService={ gitHubService } { ...props }/>
                    }
                }
            </GitHubServiceContext.Consumer>
        );
    }
}

export default withGitHubService;
