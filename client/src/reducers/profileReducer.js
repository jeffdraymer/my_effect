import { GET_PROFILE, PROFILE_LOADING, POST_PROFILE } from '../actions/types';

const initialState = {
    profile: null, //Will contain all the details of a specific profile
    loading: false, //Will track if the data have been successfully retrieved from the DB
    success: false //Will track the posting of new data to the profile
}

export default function (state = initialState, action) {
    switch (action.type) {
        //Set loading value so that the Spinner component will run while the results are being fetched
        case PROFILE_LOADING:
            return {
                ...state,
                loading: true,
                success: false
            }
        //Returns a single profile object    
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload,
                loading: false
            }
        case POST_PROFILE:
            return {
                ...state,
                profile: action.payload,
                loading: false,
                success: true
            }
        default:
            return state;
    }
}