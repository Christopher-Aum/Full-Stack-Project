import { useState } from "react";
import './Stars.css'
export default function Stars({setRating}){
    const [hover, setHover] = useState(0)
    const [newRating, setNewRating] = useState(0)
    //changes rating on hover
    const onHover = (rating) => {
        setHover(rating)
    }
    //changes rating off hover
    const offHover = () => {
        setHover(0)
    }
    //changes rating on click
    const onClick = (rating) => {
        setNewRating(rating)
        setRating(rating)
    }
    //handles the changes with stars
    const star = (idx) => {
        const filled = hover ? idx <= hover : idx <= newRating
        return (
            <span
            key={idx}
            className={`star ${filled ? 'filled' : ''}`}
            onClick={()=> onClick(idx)}
            onMouseEnter={()=> onHover(idx)}
            onMouseLeave={()=> offHover}
            >
                &#9733;
            </span>
        )
    }
//returns the stars component
    return (
        <div>
            {[1,2,3,4,5].map(star)}
        </div>
    )

}
