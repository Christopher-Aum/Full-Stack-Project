import { useState } from "react";
import './Stars.css'
export default function Stars({setRating}){
    const [hover, setHover] = useState(0)
    const [newRating, setNewRating] = useState(0)

    const onHover = (rating) => {
        setHover(rating)
    }

    const offHover = () => {
        setHover(0)
    }

    const onClick = (rating) => {
        setNewRating(rating)
        setRating(rating)
    }

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
                &#9733
            </span>
        )
    }

    return (
        <div>
            {[1,2,3,4,5].map(star)}
        </div>
    )

}
