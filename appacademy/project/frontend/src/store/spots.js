import { csrfFetch } from "./csrf";

const GET_SPOTS = 'spots/GET_SPOTS'
const CREATE_SPOT = 'spots/CREATE_SPOT'
const GET_USER_SPOTS = 'spots/GET_USER_SPOTS'
const UPDATE_SPOT = 'spots/UPDATE_SPOT'
const DELETE_SPOT = 'spots/DELETE_SPOT'
const ADD_IMAGE = 'spots/ADD_IMAGE'

//grabs the token and data for spots
export const getSpots = () => async (dispatch) =>{
    const response = await csrfFetch('/api/spots')
    const data = await response.json()
    const spots = data.Spots
    dispatch({
        type: GET_SPOTS,
        spots
    })
    return response
}
//creates a spot with provided info
export const createSpot = (spot) => async (dispatch) => {
    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(spot)
    })
const newSpot = await response.json()

dispatch({
    type: CREATE_SPOT,
    spot: newSpot
})
    dispatch(getSpots())

    return newSpot
}

export const uploadImg = (spotId, img) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/images`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(img)
    })
    if (response.ok){
        const image = await response.json()
        dispatch({
            type: ADD_IMAGE,
            spotId,
            image
        })
        return image
    }

}

export const currentUserSpots = () => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/current`)
    const res = await response.json()
    dispatch({
        type: GET_USER_SPOTS,
        spots: res.Spots
    })
    return res.Spots
}

export const updateSpot = (spotId, spotInfo) => async (dispatch)=> {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(spotInfo)
    })
    const updated = await response.json()
    dispatch({
        type: UPDATE_SPOT,
        spot: updated
    })
    return updated
}

export const deleteSpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`,
    {method: 'DELETE'})
    dispatch({
        type: DELETE_SPOT,
        spotId
    })
    return response
}

//reducer
export const spotReducer = (state = {}, action)=> {
    switch(action.type){
        case GET_SPOTS:
            return action.spots.reduce((spots, spot)=> {
                spots[spot.id] = spot;
                return spots
            }, {})
        case CREATE_SPOT:
            return {...state, [action.spot.id]: action.spot}
        case ADD_IMAGE:
            return {...state, [action.spotId]: {...state[action.spotId], SpotImages: [...state[action.spotId].SpotImages, action.image]}}
        case GET_USER_SPOTS:
            return action.spots.reduce((spots, spot)=> { spots[spot.id]= spot; return spots}, {})
        case UPDATE_SPOT:
            return {...state, [action.spot.id]: action.spot}
        case DELETE_SPOT: {const newState = {...state}
        delete newState[action.spotId];
        return newState}
            default: return state
    }
}

export default spotReducer
