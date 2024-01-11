import { csrfFetch } from "./csrf";

const GET_REVIEW = 'reviews/GET_REVIEW'
const POST_REVIEW = 'reviews/POST_REVIEW'
const DELETE_REVIEW = 'reviews/DELETE_REVIEW'
//grabs all reviews of a spot based on id
export const getReviews = (spotId) => async (dispatch)=> {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`)
    const data = await response.json()
    dispatch({
        type:GET_REVIEW,
        spotId,
        reviews:data.Reviews
    })
    return response
}
//creates a review with data provided
export const postReview = (reviewInfo) => async (dispatch) => {
    const {spotId, stars, review} = reviewInfo;
    try{
        const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
            method:'POST',
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify({review, stars})
        })
        if (response.ok){
            const newReview = await response.json()
            dispatch({
                type: POST_REVIEW,
                review: newReview
            })
            return newReview
        } else {
            const error = await response.json()
            return { error}
        }
    }catch(error){
        console.log('Error posting review:', error)
        return {error: error.message}
    }
}
//deletes review based on id
export const deleteReview = (reviewId) => async (dispatch)=> {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })
    if(response.ok){
        dispatch({
            type: DELETE_REVIEW,
            reviewId
        })
    }
}
//reducer
export default function reviewsReducer(state={}, action){
    switch(action.type){
        case GET_REVIEW:
            return{...state,[action.spotId]: action.reviews}
        case POST_REVIEW:
            return {...state,[action.review.spotId]: [action.review, ...(state[action.review.spotId]|| [])]}
        case DELETE_REVIEW:
            {const newState = {...state}; delete newState[action.reviewId]; return newState}
        default: return state
        }
}
