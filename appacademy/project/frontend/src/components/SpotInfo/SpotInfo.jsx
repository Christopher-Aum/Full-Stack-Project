import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getSpotInfo} from '../../store/spotinfo'
import {getReviews, postReview} from '../../store/reviews'
import { useModal } from "../../context/Modal";
import Review from './Review'
import ReviewForm from '../ReviewForm/ReviewForm'
import './SpotInfo.css'

export default function SpotInfo(){
const {setModalContent, closeModal} = useModal()
const {spotId} = useParams()
const dispatch = useDispatch()
const spotInfo = useSelector(state => state.spotinfo)
const reviews = useSelector(state => state.reviews[spotId])
const currentUser = useSelector(state => state.session.user)
const isLogged = Boolean(currentUser)
const isOwner = currentUser && currentUser.id == spotInfo?.Owner?.id
const [hasPosted, setHasPosted] = useState(false)

useEffect(()=> {
    dispatch(getSpotInfo(spotId))

    dispatch(getReviews(spotId)).then(()=> {
        if(reviews && currentUser){
            const review = reviews.find(review => review.userId === currentUser.id)
            setHasPosted(Boolean(review))
        }
    })
}, [dispatch, spotId])
//checks the average rating
const avgRatingFunc = () => {
    if(reviews && reviews.length > 0){
        const total = reviews.reduce((acc, review)=> acc + review.stars, 0)
        return total / reviews.length
    }
    return 0
}
//checks how many reviews are there
const numReviews = () => {
    if(reviews){
        return reviews.length;
    }
    return 0
}

const avgRating = avgRatingFunc()
const numRevs = numReviews()
//checks if it is a new review
const newReview = async (review) => {
    await dispatch(postReview(review));
    setHasPosted(true)
    closeModal()
    dispatch(getReviews(spotId))
}
//handles the opening of a review
const openReview = () => {
    setModalContent(
        <ReviewForm
        spotId={spotId}
        onReviewSubmit={newReview}
        />
    )
}

if(!spotInfo) return null
//returns the spotinfo component
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
                {spotInfo?.SpotImages?.slice(1).map((image)=> {
                <div key={image.id} className="other-image">
                    <img src={image?.url} alt={spotInfo.description}/>
                </div>
                })}
            </div>
        </div>
        <div className="spot-block-2">
            <div className="panel">
                <h2>Hosted by {spotInfo.Owner.firstName} {spotInfo.Owner.lastName}</h2>
                <div className="description">{spotInfo.description}</div>
            </div>
            <div className="booking-wrap">
                <div className="booking">
                    <div><strong>${spotInfo.price}</strong> / night</div>
                    <div className="rating">
                        <span className="fa fa-star checked"></span>
                        {numRevs > 0? (
                            <div>{avgRating.toFixed(1)} . {numReviews} {numReviews === 1 ? "review" : "reviews"}</div>
                        ): (
                            <span>New</span>
                        )}
                    </div>
                </div>
                <button onClick={()=> alert('Upcoming Feature')}>Reserve</button>
            </div>
        </div>
        <div className="line"></div>
        <div className="review">
            <div className="review-title">
                <span className="fa fa-star checked"></span><span> </span>
                {numRevs > 0 ? (
                    <font size='5'><strong>{avgRating.toFixed(1)}</strong> . <strong>{numRevs} {numRevs === 1 ? 'review': 'reviews'}</strong></font>
                ): (
                    <font size='5'><strong>New</strong></font>
                )}
            </div>
                    {isLogged && !isOwner && !hasPosted && (
            <div className="review-post">
                <button className="post-review" onClick={openReview}>Post Your Review!</button>
            </div>
                    )}
            <Review reviews={reviews}/>
        </div>
    </div>
    </>
)
}
