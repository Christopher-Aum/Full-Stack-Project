import { useDispatch, useSelector } from "react-redux";
import { deleteReview, getReviews } from "../../store/reviews";
import {DeleteReview} from '../DeleteReview/DeleteReview'
import { useModal } from "../../context/Modal";
import './Review.css'

export default function Reviews({reviews}){
    const dispatch = useDispatch()
    const {setModalContent, closeModal} = useModal()
    const currentUser = useSelector((state)=> state.session.user)

    const confirmDeletion = async (reviewId, spotId)=> {
        await dispatch(deleteReview(reviewId))
        closeModal()
        await dispatch(getReviews(spotId))
    }

    const openDeleteForm = (review) => {
        setModalContent(
            <DeleteReview
            onConfirm={()=>confirmDeletion(review.id,review.spotId)}
            onCancel={closeModal}
            />
        )
    }

    const sorted = reviews.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt))

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
                    <div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        { (
                        <div>
                            <button></button>
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
