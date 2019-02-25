import Actions from "../actions/actionTypes";

const initialState = {
    user: null,
    userLoading: true
}

export default function userStatus(state = initialState, action) {
    switch (action.type) {
        case Actions.SAVE_USER:
            return {...state, user: action.user}
        case Actions.USER_LOADING:
            return {...state, userLoading: action.payload}
        default:
            return state
    }
}