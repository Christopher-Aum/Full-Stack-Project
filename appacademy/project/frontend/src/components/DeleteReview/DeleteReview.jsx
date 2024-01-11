import './DeleteReview.css'
export default function DeleteReview({review, onCancel, onConfirm}){

    //returns the delete review component
    return (
        <div className="delete-review">
            <div className="delete-review-title">Confirm Delete</div>
            <div className="delete-review-text">Do you want to delete this review?</div>
            <br></br>
            <div className="confirm">
                <button onClick={() => onConfirm(review)}>Yes (Delete Review)</button>
            </div>
            <br></br>
            <div className="deny">
                <button onClick={onCancel}>No (Keep Review)</button>
            </div>
        </div>
    )
}
