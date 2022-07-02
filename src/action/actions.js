
const reposLoaded = (payload) => {
    return {
        type: "FETCH_USER_REPOS_LOADED",
        payload: payload,
    }
}

export {
    reposLoaded,
}
