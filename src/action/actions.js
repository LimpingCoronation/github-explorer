
const reposLoaded = (payload) => {
    return {
        type: "FETCH_USER_REPOS_LOADED",
        payload: payload,
    }
}

const userInputAction = (payload) => {
    return {
        type: "USER_INPUT",
        payload: payload,
    }
}

const reposRequested = () => { 
    return {
        type: "FETCH_USER_REPOS_REQUESTED",
    }
}

const reposFailed = { type: "FETCH_USER_REPOS_FAILED" }

export {
    reposLoaded,
    reposFailed,
    reposRequested,
    userInputAction
}
