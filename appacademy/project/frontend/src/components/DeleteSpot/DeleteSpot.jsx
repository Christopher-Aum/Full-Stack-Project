import './DeleteSpot.css'
export default function DeleteSpot({onConfirm, onCancel})
{
    return(
        <div className='delete-spot'>
            <div className='delete-spot-title'>Confirm Deletion</div>
            <div className='delete-spot-content'>Do you want to remove this spot from your listings?</div>
            <br></br>
            <div className='delete-spot-confirm' onClick={onConfirm}>Yes (Delete Spot)</div>
            <br></br>
            <div className='delete-spot-deny' onClick={onCancel}>No (Keep Spot)</div>
        </div>
    )
}
