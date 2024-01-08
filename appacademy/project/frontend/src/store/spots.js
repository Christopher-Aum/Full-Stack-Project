import { csrfFetch } from "./csrf";

const GET_SPOTS = 'spots/GET_SPOTS'
const CREATE_SPOT = 'spots/CREATE_SPOT'
const GET_USER_SPOTS = 'spots/GET_USER_SPOTS'
const UPDATE_SPOT = 'spots/UPDATE_SPOT'
const DELETE_SPOT = 'spots/DELETE_SPOT'
const ADD_IMAGE = 'spots/ADD_IMAGE'

export const getSpots = () => async (dispatch) =>{
    const response = await csrfFetch('/api/spots')
    const data = await response.json()
    const allSpots = data.Spots
    dispatch({
        type: GET_SPOTS,
        allSpots
    })
    return response
}

export const spotReducer = (state = {}, action)=> {
    switch(action.type){
        case GET_SPOTS:
            return action.allSpots.reduce((allSpots, spot)=> {
                allSpots[spot.id] = spot;
                return allSpots
            }, {})
            default: return state
    }
}
