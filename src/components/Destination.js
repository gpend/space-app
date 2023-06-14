import { Route, Routes, useParams } from "react-router";
import { Link } from "react-router-dom";
import Header from "./Header";
import data from "../assets/shared/data.json";

function FormatBody() {
  const props = useParams();
  const bodyData = data.destinations.filter(
    (destination) => destination.name === props.bodyID
  );
  const planetaryBody = bodyData[0];
  return (
    <div className='destination--subSection' key={planetaryBody.name}>
      <div className='destination--subSection image__container'>
        <img src={`/space-app/${planetaryBody.images.webp}`} alt='' />
      </div>
      <div className='destination--subSection sub-nav'>
        <ul>
          {data.destinations.map((destination) => (
            <li key={destination.name}>
              <Link
                to={`/destination/${destination.name}`}
                className={
                  destination.name === props.bodyID ? "selected" : "unselected"
                }
              >
                {destination.name.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='destination bodyText'>
        <h1>{planetaryBody.name}</h1>
        <p>{planetaryBody.description}</p>
        <hr />
        <div className='destination details'>
          <div className='destination details distance'>
            <p>AVG. DISTANCE</p>
            <p className='destination details bigText'>
              {planetaryBody.distance}
            </p>
          </div>
          <div className='destination details travelTime'>
            <p>EST. TRAVEL TIME</p>
            <p className='destination details bigText'>
              {planetaryBody.travel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Destination(props) {
  return (
    <div className='destinations sub-app'>
      <Header />
      <div className='sub-section'>
        <p>
          <span className='destination--header-number'>01</span> PICK YOUR
          DESTINATION
        </p>

        <Routes>
          <Route path=':bodyID' element={<FormatBody />} />
        </Routes>
      </div>
    </div>
  );
}

export default Destination;
