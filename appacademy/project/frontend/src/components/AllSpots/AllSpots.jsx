import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSpots } from "../../store/spots";
import './AllSpots.css'
import Spot from "./Spot"

export default function AllSpots(){
    const dispatch = useDispatch()
    const spots = useSelector(state => state.spots)
    useEffect(()=> {
        dispatch(getSpots())
    }, [dispatch])
    //returns the allspots components and its components
    return (
        <div className="wrap">
            <div className="spots-container">
                {
                Object.values(spots).map(spot => (

                    <Spot key={spot.id} spot={spot}/>
                ))
                }
            </div>
        </div>
    )
}
