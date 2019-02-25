import Actions from "./actionTypes";
import axios from 'axios'

export const getUser = (user) => {
    return {type: Actions.SAVE_USER, user}
}

export const saveUser = (user, loading, cardsOnHand) => dispatch => {
    dispatch({type: Actions.USER_LOADING, payload: true})

    axios('/api/users/new', {
        method: 'POST',
        data: user
    })
        .then(response => {
            dispatch({type: Actions.SAVE_USER, user: response.data})
            dispatch({type: Actions.USER_LOADING, payload: false})
        })



}

export const getCurrentUser = () => dispatch => {
    dispatch({type: Actions.USER_LOADING, payload: true})

    axios('/api/users/current')
        .then(response => {
            dispatch({type: Actions.SAVE_USER, user: response.data})
            dispatch({type: Actions.USER_LOADING, payload: false})
        })
}