import { Route, Routes, useParams } from "react-router"
import { Link } from "react-router-dom"
import Header from "./Header"
import data from "../assets/shared/data.json"

function Technology(props){

    function FormatBody(){
        const props = useParams()
        const techData = data.technology.filter((technology) => (technology.name.split(' ')[0]) === props.techID)
        const technology = techData[0]
        return(
            <div className="technology subSection" key={technology.name}>
                <p>THE TERMINOLOGY</p>
                <h1>{technology.name}</h1>
                <p>{technology.description}</p>
            </div>
        )
    }

    return(
        <div className="technologies sub-app">
            <Header />
            <div className="sub-section">
                <p>
                    <span className="technology--header-number">03</span> SPACE LAUNCH 101
                </p>
                <div className="sub-nav">
                    <ul>
                        {data.technology.map(technology => (
                            <li key={(technology.name.split(' ')[0])}>
                                <Link to={`/technology/${(technology.name.split(' ')[0])}`}>{technology.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            <Routes>
                <Route path=":techID" element={<FormatBody />}/>
            </Routes>
            </div>
        </div>
    )
}

export default Technology