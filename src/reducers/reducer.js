const initialState = {
    repos: [],
    loading: true,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
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
