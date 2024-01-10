import { csrfFetch } from "./csrf";

const SPOTINFO = 'spotinfo/SPOTINFO'
//info for a single spot based on id
export const getSpotInfo = (spotId) => async (dispatch)=> {
    const response = await csrfFetch(`/api/spots/${spotId}`)
    const spotinfo = await response.json()
    dispatch({
        type: SPOTINFO,
        spotinfo
    })
    return response
}
//reducer
export const spotinfoReducer = (state = null, action)=> {
    switch(action.type){
        case SPOTINFO:
            return action.spotinfo
        default: return state
    }
}
