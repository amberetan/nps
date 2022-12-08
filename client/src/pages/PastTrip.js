import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import TripForm from "./TripForm"

export default function PastTrip(props){
    const {
        title,
        location,
        lodging,
        date,
        activities,
        good,
        bad,
        rememberNextTime,
        _id,
        index
    } = props
    console.log(props)
    const {editTrip, deleteTrip } = useContext(UserContext)

    const [toggle, setToggle] = useState(true)

    function handleEdit(){
        setToggle(prev => !prev)
    }


    // function handleDelete(){
    //     deleteTrip(_id) className={user.trips.indexOf(_id)%2===0 ? "tripCard1" : "tripCard2"}
    // }
    return(
        <div>
            {toggle ? 
            <div className={index%2===0 ? "tripCard1" : "tripCard2"}>
                <h3>{title} : {date}</h3>
                <p>Location(s): {location}</p>
                <p>Lodging: {lodging}</p>
                <p>Activities: {activities}</p>
                <p>The Good: {good}</p>
                <p>The Bad: {bad}</p>
                <p>Remember for Next Time: {rememberNextTime}</p>
                <button onClick={handleEdit}>Edit Trip</button>
                <button onClick={() => deleteTrip(_id)}>Delete</button>
            </div>
            :
            <>
                <TripForm 
                    {...props}
                    btnText="Submit Edits"
                    toggle={handleEdit}
                    submit={editTrip}
                    _id={_id}
                />
            </>}

        </div>
    )
}