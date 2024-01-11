import './DeleteSpot.css'
export default function DeleteSpot({onConfirm, onCancel}){
//returns the delete spot component
    return(
        <div className='delete-spot'>
            <div className='delete-spot-title'>Confirm Deletion</div>
            <div className='delete-spot-content'>Do you want to remove this spot from your listings?</div>
            <br></br>
            <div className='confirm' onClick={onConfirm}>Yes (Delete Spot)</div>
            <br></br>
            <div className='deny' onClick={onCancel}>No (Keep Spot)</div>
        </div>
    )
}
