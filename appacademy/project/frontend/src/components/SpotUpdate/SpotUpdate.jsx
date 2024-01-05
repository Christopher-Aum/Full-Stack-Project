import { useEffect } from 'react'
import { thunkGetOneSpot } from '../../store/spots';
import '../SpotCreate/SpotCreate.css'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CreateSpot from '../SpotCreate/SpotCreate';

export default function UpdateSpot() {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    //calls for the function when it is rerendered
    useEffect(() => {
        dispatch(thunkGetOneSpot(spotId))
    }, [dispatch, spotId])
//returns the spotupdate component, with the createspot component
    return (
        <CreateSpot formType='update' isUpdate={true}/>
    )
}
