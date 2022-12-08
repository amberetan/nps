import React, {useState, useEffect} from "react"
import myApiKey from "../apiKey.js"
const NpsContext = React.createContext()


function NpsContextProvider(props){
    const [mode, setMode] = useState("light")
    const [allParks, setAllParks] = useState([])
    const [pics, setPics] = useState([])
    

    useEffect(() => {
        fetch("https://developer.nps.gov/api/v1/parks?limit=600", {
            method: "GET",
            headers: {
                "X-Api-Key": myApiKey
            }
        })
            .then(response => response.json())
            .then(data => { 
                setAllParks(data.data)
            })
    }, [])

    useEffect(() => {
        fetch("https://developer.nps.gov/api/v1/parks?parkCode=arch", {
            method: "GET",
            headers: {
                "X-Api-Key": myApiKey
            }
        })
            .then(response => response.json())
            .then(data => {
                setPics(data.data[0].images)
            })
    }, [])

    function changeMode(){
        setMode(prevMode => prevMode === "light" ? "dark" : "light")
    }
    console.log(allParks)
    return(
        <NpsContext.Provider value={{mode, allParks, pics, changeMode}}>
            {props.children}
        </NpsContext.Provider>
    )
}


export {NpsContextProvider, NpsContext}