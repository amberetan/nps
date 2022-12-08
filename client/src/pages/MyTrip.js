import React, {useContext, useEffect, useState} from "react"
import { UserContext } from "../context/UserContext"
import PastTrip from "./PastTrip"
import TripForm from "./TripForm"

function MyTrip(){
    const {trips, getTrips, addTrip, user} = useContext(UserContext)

    // useEffect(() => {
    //     getTrips(user._id)
    // }, [])

    
    return(
        <div className="tripsPage">
            <div>
                <h1>Plan a Trip</h1>
                <TripForm 
                    btnText="Add Trip"
                    submit={addTrip}
                />
            </div>
            <div>
                <h1>Past Trips</h1>
                {trips?.map((trip, index) => 
                    <PastTrip 
                        {...trip}
                        key={trip._id}
                        index={index}
                    />
                )}
            </div>
        </div>
    )
}

export default MyTrip