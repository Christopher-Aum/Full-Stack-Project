import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { createSpot, updateSpot, currentUserSpots, uploadImg  } from "../../store/spots";
import './CreateSpot.css'

export default function CreateSpot({ mode }){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const {spotId} = useParams()
    const isUpdate = mode === 'update'
    const [data, setData] = useState({
        city: '',
        country:'',
        state:'',
        address:'',
        lat:'',
        lng:'',
        name:'',
        description:'',
        price:'',
        previewImage:'',
        // urls:[],
        url1:'',
        url2:'',
        url3:'',
        url4:''
    })

        useEffect(() => {
            if(isUpdate && spotId){
                (async ()=> {
                    const res = await dispatch(currentUserSpots())
                    const updateSpot = res.find(spot => spot.id === parseInt(spotId, 10))
                    if(updateSpot){
                        setData({
                            address: updateSpot.address || '',
                            city:updateSpot.city ||  '',
                            country:updateSpot.country || '',
                            state:updateSpot.state || '',
                            lat:updateSpot.lat || '',
                            lng:updateSpot.lng || '',
                            name:updateSpot.name || '',
                            description:updateSpot.description || '',
                            price:updateSpot.price || '',
                            previewImage:updateSpot.previewImage || '',
                            urls:updateSpot.urls || []})}})()}
                        }, [dispatch, isUpdate, spotId])
        //handles any change with inputs
        const change = (e) => {
            let { name, value } = e.target;
            // if(name==='previewImage' || name.startsWith('url'))
            if(name==='previewImage' || name==='url1' || name==='url2' || name==='url3' || name==='url4')  {
                setData({...data, [name]: value });
            } else {
                if (name==='lat' || name === 'lng'){
                    value = parseFloat(value) || ''}
                setData({...data, [name]: value})}
            setErrors({...errors, [name]: ''})}
        //front-end validation of inputs
        const validate = () => {
            const newErrors = {}
            const imageTypes = ['png', 'jpg', 'jpeg']

            if(!data.country){newErrors.country = 'Country is required'}
            if(!data.state){newErrors.state = 'State is required'}
            if(!data.city){newErrors.city = 'City is required'}
            if(!data.address){newErrors.address = 'Address is required'}
            if(!data.lat){newErrors.lat = 'Latitude is required'}
            if(!data.lng){newErrors.lng = 'Longitude is required'}
            if(data.lat > 90 || data.lat < -90){newErrors.lat = 'Invalid Latitude'}
            if(data.lng > 180 || data.lng < -180){newErrors.lng = 'Invalid Longitude'}
            if(data.description.length < 30){newErrors.description = 'Description needs to be at least 30 characters long'}
            if(!data.name){newErrors.name = 'Name is required'}
            if(!data.price){newErrors.price = 'Price is required'}
            if(!data.previewImage){newErrors.previewImage = 'Preview image is required'} else if (!imageTypes.includes(data.previewImage.split('.').pop().toLowerCase())){
                newErrors.previewImage = 'Preview image needs to be in .png, .jpg, or .jpeg format'}
            // data.urls.forEach((urls, idx) => {
            //     if(!imageTypes.includes(urls.split('.').pop().toLowerCase())){
            //         newErrors[`url${idx}`] = 'Image needs to be in .png, .jpg, or .jpeg format'}})
            let otherimages = [data.url1, data.url2, data.url3, data.url4]
                otherimages.forEach((urls, idx) => {
                        if(!imageTypes.includes(urls.split('.').pop().toLowerCase())){
                            newErrors[`url${idx}`] = 'Image needs to be in .png, .jpg, or .jpeg format'}})
            setErrors(newErrors)
            return Object.keys(newErrors).length === 0;}
                    //handles submission of the create spot form
        const submit = async (e) => {
            e.preventDefault()
            const valid = validate()
            if(!valid) return;
            try {
                let res;
                let images = []
                if (mode === 'create'){
                    res = await dispatch(createSpot(data))
                    if (res && res.id && data.previewImage){
                        images.push(dispatch(uploadImg(res.id, {url: data.previewImage, preview:true})))
                        // data.urls.forEach(image => {
                        //     images.push(dispatch(uploadImg(res.id, {url:image, preview:false})))
                        // })
                        images.push(dispatch(uploadImg(res.id, {url: data.url1, preview:false})))
                        images.push(dispatch(uploadImg(res.id, {url: data.url2, preview:false})))
                        images.push(dispatch(uploadImg(res.id, {url: data.url3, preview:false})))
                        images.push(dispatch(uploadImg(res.id, {url: data.url4, preview:false})))
                    }
                } else if (mode === 'update'){
                    res = await dispatch(updateSpot(spotId, data))}
                await Promise.all(images)
                if(res && res.id){navigate(`/spots/${res.id}`)} else {
                    setErrors({Form: 'An unexpected error occurred, please submit again.'})}}catch(error){
                console.error("Error submission:", error)
                setErrors({Form: 'An unexpected error occurred, please try again.'})}}
            //handles error messages for all fields
            const ErrorMsg = ({field}) => (
                <div className="errors">{errors[field]}</div>
            )
            //returns the createspot form, and its components
            return (
                <div className="create-form">
                    <form onSubmit={submit} className={isUpdate ? 'update-form' : 'new-form'}>
                        <h1 className="mode">{mode === 'create' ? 'Create a new spot': 'Update your spot'}</h1>
                        <section className="section">
                            <h2>Where is your place located?</h2>
                            <p>Guests will only receive the address once they booked a reservation.</p>
                            <div className="sec1">
                                <div className="showerror">
                                    <span className="title">Country</span>
                                    <span className="error"><ErrorMsg field='country'/></span>
                                </div>
                                <input type="text" name="country" placeholder="Country" value={data.country} onChange={change}/>
                                <div className="showerror">
                                    <div className="title">Street Address</div>
                                    <div className="error"><ErrorMsg field='address'/></div>
                                </div>
                                <input type='text'name="address"placeholder="Address"value={data.address}onChange={change}/>
                                <div className="dual-input">
                                    <span>
                                        <div className="showerror">
                                            <div className="title">City</div>
                                            <div className="error"><ErrorMsg field='city'/></div>
                                        </div>
                                        <input type="text" name="city" placeholder="City" value={data.city} onChange={change}/>
                                        <span> ,</span>
                                    </span>
                                    <span>
                                        <div className="showerror">
                                            <div className="title">State</div>
                                            <div className="error"><ErrorMsg field='state'/></div>
                                        </div>
                                        <input type="text" name="state" placeholder="State" value={data.state} onChange={change}/>
                                    </span>
                                </div>
                                <div className="lat-lng">
                                    <span>
                                        <div className="showerror">
                                            <div className="title">Latitude</div>
                                            <div className="error"><ErrorMsg field='lat'/></div>
                                        </div>
                                        <input type="text" name="lat" placeholder="Latitude" value={data.lat} onChange={change}/>
                                        <span> ,</span>
                                    </span>
                                    <span>
                                        <div className="showerror">
                                        <div className="title">Longitude</div>
                                        <div className="error">< ErrorMsg field='lng'/></div>
                                        </div>
                                        <input type="text" name="lng" placeholder="Longitude" value={data.lng} onChange={change}/>
                                    </span>
                                </div>
                            </div>
                        </section>
                        <div className="line"></div>
                        <section className="section">
                            <h2>Describe Your Spot!</h2>
                            <p>Mention the best features of your spot to future guests, any special features or amenities such as nearby locations, wi-fi, or parking, for example.</p>
                            <textarea name="description" placeholder="Please describe your spot in at least 30 characters" value={data.description} onChange={change}></textarea>
                            <div className="error">< ErrorMsg field='description'/></div>
                        </section>
                        <div className="line"></div>
                        <section className="section">
                            <h2>What is the title for your spot?</h2>
                            <p>Let any future guests know about your spot with a title that showcases something special about your spot!</p>
                            <input type="text" name="name" placeholder="Enter your spot's title!" value={data.name} onChange={change}/>
                            <div className="error"><ErrorMsg field='name' /></div>
                        </section>
                        <div className="line"></div>
                        <section className="section">
                            <h2>What is the price for your spot?</h2>
                            <p>Competitive pricing will ensure more future guests!</p>
                            <div className="price-wrap">
                                <span>$ <input type="text" name="price" placeholder="(USD) Price per night" value={data.price} onChange={change}/></span>
                            </div>
                            <div className="error">< ErrorMsg field='price'/></div>
                        </section>
                        {mode === 'create' && (
                            <section className="section">
                                <div className="line"></div>
                                <h2>Provide photos for your spot</h2>
                                <p>Submit a link to at least one photo for your spot.</p>
                                <div className="image-inputs">
                                    <input type="text" name="previewImage" placeholder="Preview Image URL" value={data.previewImage} onChange={change}/>
                                    <div className="error">< ErrorMsg field='previewImage'/></div>
                                    <input type="text" name="url1" placeholder="Image URL" value={data.url1} onChange={change}/>
                                    <div className="error">< ErrorMsg field='url0'/></div>
                                    <input type="text" name="url2" placeholder="Image URL" value={data.url2} onChange={change}/>
                                    <div className="error">< ErrorMsg field='url1'/></div>
                                    <input type="text" name="url3" placeholder="Image URL" value={data.url3} onChange={change}/>
                                    <div className="error">< ErrorMsg field='url2'/></div>
                                    <input type="text" name="url4" placeholder="Image URL" value={data.url4} onChange={change}/>
                                    <div className="error">< ErrorMsg field='url3'/></div>
                                </div>
                                <div className="line"></div>
                            </section>)}
                        <div className="create-button">
                            <button style={{backgroundColor: '#FF5A5F'}}>{isUpdate ? "Update Your Spot" : "Create Spot"}</button>
                        </div>
                    </form>
                </div>
            )}
