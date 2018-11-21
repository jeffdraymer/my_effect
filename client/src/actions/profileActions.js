import axios from 'axios';

import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS, POST_PROFILE } from './types';

//Get current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios
        .get('/api/profile')
        .then(res => {
            //If the profile is found then return it
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        })
        .catch(err => {
            //If the profile is not found then return empty object and prompt user to create profile
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        }
        );
};

//Create new profile
export const createProfile = (profileData) => dispatch => {
    dispatch(setProfileLoading());
    axios
        .post('/api/profile', profileData)
        .then(res => dispatch({
            type: POST_PROFILE,
            payload: res.data
        }))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

//Profile Loading 
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    }
};




