
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

const readMeFileLoaded = (payload) => {
    return {
        type: "FETCH_README_FILE_LOADED",
        payload: payload,
    }
}

const reposFailed = { type: "FETCH_USER_REPOS_FAILED" }

const readMeFileFailed = { type: "FETCH_README_FILE_FAILED" }

const userReposCountLoaded = (payload) => {
    return {
        type: "FETCH_USER_LOADED",
        payload: payload,
    }
}

export {
    reposLoaded,
    reposFailed,
    reposRequested,
    userInputAction,
    readMeFileLoaded,
    readMeFileFailed,
    userReposCountLoaded
}
