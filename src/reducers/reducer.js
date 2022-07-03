const initialState = {
    repos: [],
    userInput: null,
    user: "",
    loading: true,
    errorReposLoaded: false,
    message: false,
    count: 0,
    details: {
        file: null,
        loading: true,
        hasError: false,
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_USER_REPOS_FAILED":
            return {
                ...state,
                repos: [],
                loading: false,
                errorReposLoaded: true,
                message: true
            };
        case "FETCH_USER_REPOS_LOADED":
            return {
                ...state,
                repos: action.payload,
                loading: false,
                errorReposLoaded: false,
                message: false,
                details: {
                    file: null,
                    loading: true,
                }
            };
        case "FETCH_USER_REPOS_REQUESTED":
            return {
                ...state,
                user: state.userInput,
                repos: [],
                loading: true,
                message: false,
                errorReposLoaded: false,
            };
        case "USER_INPUT":
            return {
                ...state,
                userInput: action.payload
            }
        case "FETCH_README_FILE_LOADED":
            return {
                ...state,
                details: {
                    file: action.payload,
                    loading: false,
                    hasError: false,
                }
            }
        case "FETCH_README_FILE_FAILED":
            return {
                ...state,
                details: {
                    file: action.payload,
                    loading: false,
                    hasError: true,
                }
            }
        case "FETCH_USER_LOADED":
            return {
                ...state,
                count: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;
