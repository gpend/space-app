import { Route, Routes, useParams } from "react-router"
import { Link } from "react-router-dom"
import icon from "../assets/shared/icon.png"
import Nav from "./nav"
import data from "../assets/shared/data.json"

function Destination(props){

    function FormatBody(){
        const props = useParams()
        const bodyData = data.destinations.filter((destination) => destination.name === props.bodyID)
        const planetaryBody = bodyData[0]
        return(
            <div className="planetaryBody" key={planetaryBody.name}>
                <h1>{planetaryBody.name}</h1>
                <p>{planetaryBody.description}</p>
                <p>{planetaryBody.distance}</p>
                <p>{planetaryBody.travel}</p>
            </div>
        )
    }

    return(
        <div className="destinations">
            <header>
                <div className='header--icon'>
                    <img src={icon} alt="site icon" />
                </div>
                <Nav />
            </header>
            <p>
                <span className="destination--header-number">01</span> PICK YOUR DESTINATION
            </p>
            <nav>
                <ul>
                    {data.destinations.map(destination => (
                        <li key={destination.name}>
                            <Link to={`/destination/${destination.name}`}>{destination.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Routes>
                <Route path=":bodyID" element={<FormatBody />}/>
            </Routes>
        </div>
    )
}

export default Destination