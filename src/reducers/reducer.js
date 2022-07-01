
const initialState = {

}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_USER_LOADED":
            return state;
        default:
            return state;
    }
}

export default reducer;
