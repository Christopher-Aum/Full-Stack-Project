import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal";
import { thunkDeleteReview } from "../../store/review";

export default function DeleteReview ({ reviewId, spotId}) {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
//a function that handles the submission of a delete for a review
    async function handleSubmit(e) {
        e.preventDefault();
        await dispatch(thunkDeleteReview(reviewId, spotId))
            .then(closeModal)
    }

//returns the reviewdelete component, and its components
    return(
        <form onSubmit={handleSubmit}>
            <h2 >Confirm Delete</h2>
            <h3 >Are you sure you want to delete this review?</h3>
            <button type='submit' >Yes (Delete Review)</button>
             <button type='button' onClick={() => closeModal()}>No (Keep Review)</button>
        </form>
    )
}
