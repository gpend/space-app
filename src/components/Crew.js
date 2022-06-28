import { Route, Routes, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from './Header';
import data from '../assets/shared/data.json';

function FormatCrew() {
  const props = useParams();
  const memberData = data.crew.filter(
    (crew) => crew.name.split(' ')[1] === props.crewMember
  );
  const crewMember = memberData[0];
  return (
    <>
      <div className='sub-nav'>
        <ul>
          {data.crew.map((crew) => {
            let crewMember = crew.name.split(' ')[1];
            return (
              <li key={crew.name}>
                <Link to={`/crew/${crewMember}`}>
                  <svg
                    width='10'
                    height='10'
                    viewBox='0 0 10 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-label={crew.name}
                  >
                    <circle
                      opacity={
                        window.location.href.split('/').at(-1) ===
                        crew.name.split(' ')[1]
                          ? '1'
                          : '0.174363'
                      }
                      cx='5'
                      cy='5'
                      r='5'
                      fill='white'
                    />
                  </svg>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='subSection crewMember' key={crewMember.name}>
        <img src={`/space-app/${crewMember.images.webp}`} alt='crew member' />

        <p>{crewMember.role}</p>
        <h1>{crewMember.name}</h1>
        <p>{crewMember.bio}</p>
      </div>
    </>
  );
}

function Crew(props) {
  //  `${crewMember.images.png}`

  return (
    <div className='crew sub-app'>
      <Header />
      <div className='sub-section'>
        <p>
          <span className='crew--header-number'>02</span> MEET YOUR CREW
        </p>

        <Routes>
          <Route path=':crewMember' element={<FormatCrew />} />
        </Routes>
      </div>
    </div>
  );
}

export default Crew;
