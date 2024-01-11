import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './AllSpots.css'

export default function Spot({spot}){
    const [nav, setNav] = useState(null)
    const navigate = useNavigate()
    useEffect(()=> {
        if(nav) navigate(nav)
    },[nav, navigate])
//navigates to specific spot if clicked
    const clickTo = () => {
        setNav(`/spots/${spot.id}`)
    }
 //returns the rating
    const newRating = () => {
        if(spot.avgRating) {
            return <div>{spot.avgRating}</div>
        }
        return <div>New</div>
    }
    //returns the spot component and its components
    return (
        <div className="spots-list" onClick={clickTo} title={spot.name}>
            <img src={spot.previewImage ? spot.previewImage : null} alt={spot.name} />
            <div className="spot-description">
            <div className="city">
                <span className="city-state">{spot.city}, {spot.state}</span>
                <span className="rating">
                    <span className="fa fa-star checked"></span>
                    {newRating()}
                </span>
            </div>
            <div className="price-con">
                <span className="money">$</span> <span className="price">{spot.price}</span> per night
            </div>
            </div>
        </div>
    )
}
