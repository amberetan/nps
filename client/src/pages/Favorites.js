import React, { useContext } from "react"
import {Link} from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { NpsContext } from "../context/npsContext"



function Favorites(){
    const { favorites } = useContext(UserContext)
    const { allParks } = useContext(NpsContext)
    const theseParks = allParks?.filter(faves => {
        for(let i=0; i<= favorites?.length; i++){
            if(favorites[i]===faves.parkCode){
                return faves
            }
        }
    })
    console.log(theseParks)
    return(
        <>
        {theseParks?.map(fav => <div key={fav.parkCode}><Link to={`/park/${fav.states}/${fav.parkCode}`} className="favLinks">{fav.fullName}</Link><br/><br/></div>)}
        {/* {theseParks.fullName} */}
        </>
    )

}

export default Favorites