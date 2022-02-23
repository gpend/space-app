import data from "../starter-code/data.json"

function Destination(props){
    const planets = data.destinations.map(planet => {
        return(
            <div className="planet" key={planet.name}>
                <h1>{planet.name}</h1>
                <p>{planet.description}</p>
                <p>{planet.distance}</p>
                <p>{planet.travel}</p>
            </div>
        )
    })
    
    
    return(
        <div className="destination">
            {planets}
        </div>
    )
}

export default Destination