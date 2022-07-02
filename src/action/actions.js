
const reposLoaded = (payload) => {
    return {
        type: "FETCH_USER_REPOS_LOADED",
        payload: payload,
    }
}

const reposFailed = { type: "FETCH_USER_REPOS_LOADED" }

export {
    reposLoaded,
    reposFailed,
}
