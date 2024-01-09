import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getDetails} from '../../store/spotinfo'
import {getReview, postReview} from '../../store/reviews'
import { useModal } from "../../context/Modal";
import Review from './Review'
import ReviewForm from '../ReviewForm/ReviewForm'
import './SpotInfo.css'

export default function SpotInfo(){
const {setModalContent, closeModal} = useModal()
const {spotId} = useParams()
const dispatch = useDispatch()
const spotInfo = useSelector(state => state.spotinfo)
const reviews = useSelector(state => state.review[spotId])
const currentUser = useSelector(state => state.session.user)
const isLogged = Boolean(currentUser)
const isOwner = currentUser && currentUser.id == spotInfo?.Owner?.id
const [hasPosted, setHasPosted] = useState(false)

useEffect(()=> {
    dispatch(getDetails(spotId))

    dispatch(getReview(spotId)).then(()=> {
        if(reviews && currentUser){
            const review = reviews.find(review => review.userId === currentUser.id)
            setHasPosted(Boolean(review))
        }
    })
}, [dispatch, spotId])

const avgRating = () => {
    if(reviews && reviews.length > 0){
        const total = reviews.reduce((acc, review)=> acc + review.stars, 0)
        return total / reviews.length
    }
    return 0
}

const numReviews = () => {
    if(reviews){
        return reviews.length;
    }
    return 0
}

const avgRate = avgRating()
const numRevs = numReviews()

const newReview = async (review) => {
    await dispatch(postReview(review))
    setHasPosted(true)
    closeModal()
    dispatch(getReview(spotId))
}

const openReview = () => {
    setModalContent(
        <ReviewForm
        spotId={spotId}
        onReviewSubmit={newReview}
        />
    )
}

if(!spotInfo) return null

return (
    <>
    <div className="spot-wrap">
        <div className="spot-block-1">
            <h2>{spotInfo.name} </h2>
            <h3>{spotInfo.city}, {spotInfo.state}, {spotInfo.country} </h3>
        </div>
        <div className="images">
            <div className="main-image">
                <img src={spotInfo?.SpotImages?.[0]?.url} alt={spotInfo.description}/>
            </div>
            <div className="other-images">

                <div>
                    <img />
                </div>

            </div>
        </div>
        <div className="spot-block-2">
            <div>
                <h2> </h2>
                <div className="description"> </div>
            </div>
            <div className="booking-wrap">
                <div className="booking">
                    <div><strong></strong></div>
                    <div className="rating">
                        <span></span>

                        <div> </div>
                        <span> </span>
                    </div>
                </div>
                <button onClick={()=> alert('Upcoming Feature')}>Reserve</button>
            </div>
        </div>
        <div className="line"></div>
        <div className="review">
            <div className="review-title">
                <span></span><span></span>
            </div>

            <div className="review-post">
                <button className="post-review">Post Your Review!</button>
            </div>

            <Review reviews={reviews}/>
        </div>
    </div>
    </>
)
}
