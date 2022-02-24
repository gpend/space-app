import { Route, Routes, useParams } from "react-router"
import { Link } from "react-router-dom"
import icon from "../assets/shared/icon.png"
import Nav from "./nav"
import data from "../assets/shared/data.json"

function Crew(props){

    function FormatCrew(){
        const props = useParams()
        console.log(props)
        const memberData = data.crew.filter((crew) => (crew.name.split(' ')[1]) === props.crewMember)
        const crewMember = memberData[0]
        return(
            <div className="crewMember" key={crewMember.name}>
                <p>{crewMember.role}</p>
                <h1>{crewMember.name}</h1>
                <p>{crewMember.bio}</p>
            </div>
        )
    }

    return(
        <div className="crew">
            <header>
                <div className='header--icon'>
                    <img src={icon} alt="site icon" />
                </div>
                <Nav />
            </header>
            <p>
                <span className="crew--header-number">02</span> MEET YOUR CREW 
            </p>
            <nav>
                <ul>
                    {data.crew.map(crew => (
                        <li key={crew.name}>
                            <Link to={`/crew/${crew.name.split(' ')[1]}`}><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.174363" cx="5" cy="5" r="5" fill="white"/></svg>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Routes>
                <Route path=":crewMember" element={<FormatCrew />}/>
            </Routes>
        </div>
    )
}

export default Crew