import React from "react"
import {Link} from "react-router-dom"
import stateMap from "../img/statesmap.jpeg"
import "./states.css"

function ParksByState(){
    
    return (
        <div className="parks-by-state">
            <div>
                <img src={stateMap} alt="map of states" height="500px" className="stateMap"></img>
                <div className="buttons">
                    <Link to={`/park/AL`}><div className="al state">AL</div></Link>
                    <Link to={`/park/AK`}><div className="ak state">AK</div></Link>
                    <Link to={`/park/AS`}><div className="as state">AS</div></Link>
                    <Link to={`/park/AZ`}><div className="az state">AZ</div></Link>
                    <Link to={`/park/AR`}><div className="ar state">AR</div></Link>
                    <Link to={`/park/CA`}><div className="ca state">CA</div></Link>
                    <Link to={`/park/CO`}><div className="co state">CO</div></Link>
                    <Link to={`/park/CT`}><div className="ct state">CT</div></Link>
                    <Link to={`/park/DE`}><div className="de state">DE</div></Link>
                    <Link to={`/park/DC`}><div className="dc state">DC</div></Link>
                    <Link to={`/park/FL`}><div className="fl state">FL</div></Link>
                    <Link to={`/park/GA`}><div className="ga state">GA</div></Link>
                    <Link to={`/park/GU`}><div className="gu state">GU</div></Link>
                    <Link to={`/park/HI`}><div className="hi state">HI</div></Link>
                    <Link to={`/park/ID`}><div className="id state">ID</div></Link>
                    <Link to={`/park/IL`}><div className="il state">IL</div></Link>
                    <Link to={`/park/IN`}><div className="in state">IN</div></Link>
                    <Link to={`/park/IA`}><div className="ia state">IA</div></Link>
                    <Link to={`/park/KS`}><div className="ks state">KS</div></Link>
                    <Link to={`/park/KY`}><div className="ky state">KY</div></Link>
                    <Link to={`/park/LA`}><div className="la state">LA</div></Link>
                    <Link to={`/park/ME`}><div className="me state">ME</div></Link>
                    <Link to={`/park/MD`}><div className="md state">MD</div></Link>
                    <Link to={`/park/MA`}><div className="ma state">MA</div></Link>
                    <Link to={`/park/MI`}><div className="mi state">MI</div></Link>
                    <Link to={`/park/MN`}><div className="mn state">MN</div></Link>
                    <Link to={`/park/MS`}><div className="ms state">MS</div></Link>
                    <Link to={`/park/MO`}><div className="mo state">MO</div></Link>
                    <Link to={`/park/MT`}><div className="mt state">MT</div></Link>
                    <Link to={`/park/NE`}><div className="ne state">NE</div></Link>
                    <Link to={`/park/NV`}><div className="nv state">NV</div></Link>
                    <Link to={`/park/NH`}><div className="nh state">NH</div></Link>
                    <Link to={`/park/NJ`}><div className="nj state">NJ</div></Link>
                    <Link to={`/park/NM`}><div className="nm state">NM</div></Link>
                    <Link to={`/park/NY`}><div className="ny state">NY</div></Link>
                    <Link to={`/park/NC`}><div className="nc state">NC</div></Link>
                    <Link to={`/park/ND`}><div className="nd state">ND</div></Link>
                    <Link to={`/park/MP`}><div className="mp state">MP</div></Link>
                    <Link to={`/park/OH`}><div className="oh state">OH</div></Link>
                    <Link to={`/park/OK`}><div className="ok state">OK</div></Link>
                    <Link to={`/park/OR`}><div className="or state">OR</div></Link>
                    <Link to={`/park/PA`}><div className="pa state">PA</div></Link>
                    <Link to={`/park/PR`}><div className="pr state">PR</div></Link>
                    <Link to={`/park/RI`}><div className="ri state">RI</div></Link>
                    <Link to={`/park/SC`}><div className="sc state">SC</div></Link>
                    <Link to={`/park/SD`}><div className="sd state">SD</div></Link>
                    <Link to={`/park/TN`}><div className="tn state">TN</div></Link>
                    <Link to={`/park/TX`}><div className="tx state">TX</div></Link>
                    <Link to={`/park/UT`}><div className="ut state">UT</div></Link>
                    <Link to={`/park/VT`}><div className="vt state">VT</div></Link>
                    <Link to={`/park/VI`}><div className="vi state">VI</div></Link>
                    <Link to={`/park/VA`}><div className="va state">VA</div></Link>
                    <Link to={`/park/WA`}><div className="wa state">WA</div></Link>
                    <Link to={`/park/WV`}><div className="wv state">WV</div></Link>
                    <Link to={`/park/WI`}><div className="wi state">WI</div></Link>
                    <Link to={`/park/WY`}><div className="wy state">WY</div></Link>

                </div>
            </div>
        </div>
    )
}

export default ParksByState