const initialState = {
    repos: [],
    loading: true,
    errorReposLoaded: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_USER_REPOS_FAILED":
            return {
                repos: [],
                loading: false,
                errorReposLoaded: true,
            };
        case "FETCH_USER_REPOS_LOADED":
            return {
                repos: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}

export default reducer;
