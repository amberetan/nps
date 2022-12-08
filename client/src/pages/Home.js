import React, {useContext, useEffect} from "react"
import {NpsContext} from "../context/npsContext"
import {UserContext} from "../context/UserContext"
import {Link} from "react-router-dom" 
import Auth from "./Auth.js"

function Home(){
    const {pics} = useContext(NpsContext)
    const {getTrips, getFavorites, user} = useContext(UserContext)
    const backgroundImg = pics.map(image =>
        <li key={image.caption}>
            <span><img alt={image.altText} src={image.url}></img></span>
        </li>)
    console.log(backgroundImg)

    // useEffect(() => {
    //     getTrips(user._id),
    //     getFavorites(user._id)
    // },[])
    return(
        <div className="home">
            <ul className="home-background">
                {backgroundImg}
            </ul>
            <div className="explore">
                <Auth />
            </div>
        </div>
    )
}

export default Home