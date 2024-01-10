import { useDispatch, useSelector } from "react-redux";
import { deleteReview, getReviews } from "../../store/reviews";
import {DeleteReview} from '../DeleteReview/DeleteReview'
import { useModal } from "../../context/Modal";
import './Review.css'

export default function Reviews({reviews}){
    const dispatch = useDispatch()
    const {setModalContent, closeModal} = useModal()
    const currentUser = useSelector((state)=> state.session.user)
//function that deletes the review
    const confirmDeletion = async (reviewId, spotId)=> {
        await dispatch(deleteReview(reviewId))
        closeModal()
        await dispatch(getReviews(spotId))
    }
//function that calls in the delete form for a review
    const openDeleteForm = (review) => {
        setModalContent(
            <DeleteReview
            onConfirm={()=>confirmDeletion(review.id,review.spotId)}
            onCancel={closeModal}
            />
        )
    }

    const sorted = reviews.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt))
//returns the review component and its components
    return (
        <div className="review-con">
            {sorted && sorted.length > 0 ? (
             sorted.map((review)=> {
                let time = review.createdAt
                let date = new Date(time)
                let options = {
                    month: 'long',
                    year: 'numeric'
                }
                return (
                    <div key={review.id} className="review-id">
                        <div className="review-details">
                            <div className="rev-name">{review.User?.firstName ? review.User.firstName : sessionUser.firstName}</div>
                            <div className="rev-date">{date.toLocaleDateString(undefined, options)}</div>
                            <div className="rev-content">{review.review}</div>
                        </div>
                        { currentUser && review.User?.id === currentUser.id && (
                        <div className="delete-review">
                            <button onClick={()=> openDeleteForm(review)}>Delete</button>
                        </div>
                        )}
                    </div>
                )
             })
             ) : (
                <div className="no-post">Be the first to post a review!</div>
             )}
        </div>
    )
}
