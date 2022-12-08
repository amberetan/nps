import React, {useContext, useState} from "react"
import {useParams} from "react-router-dom"
import {NpsContext} from "../context/npsContext"
import { UserContext } from "../context/UserContext"

function Park(){
    const {allParks} = useContext(NpsContext)
    const {addFavorite, removeFavorite, user} = useContext(UserContext)
    const {parkId} = useParams()
    const [toggle, setToggle] = useState(false)
    const thisPark = allParks.find(park => (park.parkCode === parkId))
    // console.log(thisPark)

    function handleClickAdd(e){
        e.preventDefault()
        setToggle(prev => !prev)
        addFavorite(user._id,parkId)
    }
    function handleClickRemove(e){
        e.preventDefault()
        setToggle(prev => !prev)
        removeFavorite(user._id,parkId)
    }
    return (
       <>
            <div className="park-page">
                <h1>{thisPark?.fullName || "loading" }    
                    {toggle ? 
                        <button onClick={handleClickRemove} className="favBtn">Remove from Favorites</button> 
                    :
                        <button onClick={handleClickAdd} className="favBtn">Add to Favorites</button>}
                </h1>
                <div className="park-page-grid">
                    <div className="park-page-about">
                        <h2>About:</h2>
                        <p>{thisPark?.description}</p>
                    </div>
                    <div className="park-page-hours">
                        <h2>Hours:</h2>
                        <ul>
                            {thisPark?.operatingHours?.map(hours =>
                                <li key={hours.name}>
                                    <h3>{hours.name}</h3>
                                    <p>{hours.description}</p>
                                    <h4>Standard Hours:</h4>
                                    <p>Monday: {hours.standardHours.monday}</p>
                                    <p>Tuesday: {hours.standardHours.tuesday}</p>
                                    <p>Wednesday: {hours.standardHours.wednesday}</p>
                                    <p>Thursday: {hours.standardHours.thursday}</p>
                                    <p>Friday: {hours.standardHours.friday}</p>
                                    <p>Saturday: {hours.standardHours.saturday}</p>
                                    <p>Sunday: {hours.standardHours.sunday}</p>
                                </li>)}
                        </ul>
                    </div>
                    <div className="park-page-fees">
                        <h2>Entrance & Fees:</h2>
                        <ul>
                            {thisPark?.entranceFees?.map(park => 
                                <li key={park.description + park.title}>
                                    <h3>{park.title}: {park.cost}</h3>
                                    <p>{park.description}</p>
                                </li>)}
                        </ul>
                        <br/>
                        <h2>Contact:</h2>
                        <ul>
                            {thisPark?.contacts.phoneNumbers?.map(phone =>
                                <li key ={phone.phoneNumber}>
                                    <p>Phone: {phone.phoneNumber}    EXT: {phone.extension}</p>
                                </li>)}
                            {thisPark?.contacts.emailAddresses?.map(email =>
                                <li key={email.emailAddress}>
                                    <p>Email: {email.emailAddress}</p>
                                </li>)}
                        </ul>
                    </div>
                    <div className="park-page-activities">
                        <h2>Activities & Amenities:</h2>
                        <ul>
                            {thisPark?.activities?.map(activity => 
                                <li key={activity.id}>
                                    <p>{activity.name}</p>
                                </li>)}
                        </ul>
                    </div>
                    <div className="park-page-weather">
                        <h2>Weather:</h2>
                        <p>{thisPark?.weatherInfo}</p>
                    </div>
                </div>
            </div>
            <ul className="backgroundImages">
                {thisPark?.images?.map(image =>
                    <li key={image.caption}>
                        <span><img alt={image.altText} src={image.url}></img></span>
                    </li>)}
            </ul>
        </>
    )
}

export default Park