import { csrfFetch } from "./csrf";

const SPOTINFO = 'spotinfo/SPOTINFO'
//info for a single spot based on id
export const spotInfo = (spotId) => async (dispatch)=> {
    const response = await csrfFetch(`/api/spots/${spotId}`)
    const spotinformation = await response.json()
    dispatch({
        type: SPOTINFO,
        spotinformation
    })
    return response
}
//reducer
export const spotinfoReducer = (state = null, action)=> {
    switch(action.type){
        case SPOTINFO:
            return action.spotinformation
        default: return state
    }
}
