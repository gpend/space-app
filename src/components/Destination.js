import { Route, Routes, useParams, useLocation } from "react-router"
import { Link } from "react-router-dom"
import Header from "./Header"
import data from "../assets/shared/data.json"

function Destination(props){
    const location = useLocation()
    console.log(location.pathname.split("/")[2] ? "true": "false")
    function FormatBody(){
        const props = useParams()
        const bodyData = data.destinations.filter((destination) => destination.name === props.bodyID)
        const planetaryBody = bodyData[0]
        return(
            <div className="planetaryBody subSection" key={planetaryBody.name}>
                <h1>{planetaryBody.name}</h1>
                <p>{planetaryBody.description}</p>
                <hr />
                <p>AVG. DISTANCE</p>
                <p>{planetaryBody.distance}</p>
                <p>EST. TRAVEL TIME</p>
                <p>{planetaryBody.travel}</p>
            </div>
        )
    }

    return(
        <div className="destinations sub-app">
            < Header />
            <div className="sub-section">
                <p>
                    <span className="destination--header-number">01</span> PICK YOUR DESTINATION
                </p>
                <div className="sub-nav">
                    <ul>
                        {data.destinations.map(destination => (
                            <li key={destination.name}>
                                <Link to={`/destination/${destination.name}`}>{destination.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Routes>
                    <Route path=":bodyID" element={<FormatBody />}/>
                </Routes>
            </div>
        </div>
    )
}

export default Destination