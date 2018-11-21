import { SET_PUBLIC_VIEW, SET_PRIVATE_VIEW } from '../actions/types';

const initialState = {
    privateView: false //Will track if the page is public or private
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PRIVATE_VIEW:
            return {
                ...state,
                privateView: true
            }
        case SET_PUBLIC_VIEW:
            return {
                ...state,
                privateView: false
            }
        default:
            return state;
    }
}