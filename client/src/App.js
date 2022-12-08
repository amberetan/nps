import React, {useContext} from "react"
import {Link, Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/Home"
import ParksByState from "./pages/ParksByState"
import MyTrip from "./pages/MyTrip"
import {NpsContext} from "./context/npsContext"
import Park from "./pages/Park"
import State from "./pages/State"
import { UserContext } from "./context/UserContext"
import Favorites from "./pages/Favorites"


function App(){
    const {mode} = useContext(NpsContext)
    const {logout, token} = useContext(UserContext)
    return (
        <>
            <header className={`header-${mode}`}>
                National Parks
            </header>
            {token && <nav className={`nav-${mode}`}>
                {/* <Link className="link" to="/"><div className="nav-link">Home</div></Link> */}
                <Link className="link" to="/parksbystate"><div className="nav-link">Parks</div></Link>
                <Link className="link" to="/mytrip">My Trip</Link>
                <Link className="logout" to="/"><button className="logoutBtn" onClick={logout}>Logout</button></Link>
            </nav>}
            <main className={`main-${mode}`}>
                {token && <div className="favSideBar">
                    <h4>Favorites:</h4>
                    <Favorites />
                </div>}
                <Routes>
                    <Route path="/" element={ token ? <Navigate to="/parksbystate" /> : <Home />} />
                    <Route path="/parksbystate" element={<ParksByState />} />
                    <Route path="/mytrip" element={<MyTrip />} />
                    <Route path="/park/:stateId" element={<State />} />
                    <Route path="/park/:stateId/:parkId" element={<Park />} />
                </Routes>
                
            </main>
            <footer className={`nav-${mode}`}>
                <p>Photos and information courtesy of the <a href="https://www.nps.gov/index.htm">National Parks Service</a>.</p>
                <p>website by Amber Tan©</p>
                <button>Change Mode</button>
            </footer>

        </>
    )
}

export default App