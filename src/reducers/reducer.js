const initialState = {
    repos: [],
    userInput: null,
    user: null,
    loading: true,
    loaded: false,
    errorReposLoaded: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_USER_REPOS_FAILED":
            return {
                ...state,
                repos: [],
                loading: false,
                loaded: false,
                errorReposLoaded: true,
            };
        case "FETCH_USER_REPOS_LOADED":
            return {
                ...state,
                repos: action.payload,
                loading: false,
                loaded: true,
                errorReposLoaded: false,
            };
        case "FETCH_USER_REPOS_REQUESTED":
            if (state.loaded) return state;
            return {
                ...state,
                user: state.userInput,
                repos: [],
                loading: true,
                loaded: true,
                errorReposLoaded: false,
            };
        case "USER_INPUT":
            return {
                ...state,
                loaded: false,
                userInput: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
