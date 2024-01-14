import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { postReview } from "../../store/reviews";
import Stars from './Stars'
import './ReviewForm.css'

export default function ReviewForm ({ spotId, submit}){
    const dispatch = useDispatch()
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const [errors, setErrors] = useState({})
    const {closeModal} = useModal()

    useEffect(()=> {
        setRating(0)
        setComment('')
        setErrors({})
    }, [spotId])
//handles the submission of the form
    const submitForm = async (e) => {
        e.preventDefault()
        setErrors({})
        try {
            const reviewContent = {review: comment, stars: rating, spotId: parseInt(spotId, 10)}
            const res = await dispatch(postReview(reviewContent))
            if(!res.error){
                submit(res)
                closeModal();
                setRating(0)
                setComment('')
            } else if (res.status === 500){
                const errorRes = await res.json()
                throw new Error({message: errorRes.message || 'User already posted review for this spot'})
            }}catch(error){
                setErrors({message: 'User already posted review for this spot'})
            }}
//returns the review form component
    return (
        <div className="review-form-con">
            <div className="title">How was your stay?</div>
            {errors.message && <p className="error">{errors.message}</p>}
            <form onSubmit={submitForm} className="review-form">
                <textarea
                    value={comment}
                    onChange={(e)=> setComment(e.target.value)}
                    placeholder="Enter your review..."
                    required
                />
                <div className="rating">
                    <Stars setRating={setRating}/>
                    <div className="stars"> Stars</div>
                </div>
                <button className="submit-review"
                type="submit"
                disabled={comment.length < 10 || rating === 0}>
                Submit Your Review!
                </button>
            </form>
        </div>
    )}
