import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import './ManageSpots.css'
import { NavLink, Link } from "react-router-dom";
import { currentUserSpots, deleteSpot } from "../../store/spots";
import { useModal } from "../../context/Modal";
import DeleteSpot from "../DeleteSpot/DeleteSpot";

export default function ManageSpots(){
    const dispatch = useDispatch()
    const {setModalContent, closeModal} = useModal()
    const userId = useSelector(state => state.session.user.id)
    const userSpots = useSelector(state => state.spots)
    useEffect(()=> {
        dispatch(currentUserSpots())
    },[dispatch, userId])

    if(!userSpots){
        return null
    }
//handles spot deletion
    const spotDelete = async (spotId)=> {
        await dispatch(deleteSpot(spotId))
        closeModal()
        dispatch(currentUserSpots)
    }
//makes the delete form
    const deleteForm = (spotId) => {
        setModalContent(
            <DeleteSpot
            onConfirm={()=> spotDelete(spotId)}
            onCancel={closeModal}
            />)}
    if(!userSpots){
        return null;
    }
//returns the manage spot component
    return (
        <div>
            <h1>Manage Your Spots!</h1>
            {userId && <button><NavLink to='/create-spot'>Create A New Spot</NavLink></button>}
            <div>
                {userId && Object.values(userSpots).length > 0 && (
                Object.values(userSpots).map(spot => {
                    <div>
                        <Link to={`/spots/${spot.id}`} key={spot.id}>
                            <img src={spot.previewImage} alt={spot.name}/>
                            <div>
                                <span>{spot.city}, {spot.state}</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span>{spot.avgRating ? spot.avgRating : 'New'}</span>
                                </div>
                            </div>
                            <div><span>$</span><span>{spot.price}</span> per night</div>
                        </Link>
                        <div>
                            <button><NavLink to={`/update-spot/${spot.id}`}>Update</NavLink></button>
                            <button onClick={()=> deleteForm(spot.id)}>Delete</button>
                             </div>
                    </div>}))}
            </div>
        </div>
    )
}
