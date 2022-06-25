import { Route, Routes, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from './Header';
import data from '../assets/shared/data.json';

function Technology(props) {
  /**
   * filter the data.technology array by the first word of the
   * name property, and then return the first element of the filtered array.
   * @returns The return is a div with a class of technology subSection. The key
   * is the name of the technology. The div contains an image, a sub-nav, a p
   * tag, an h1 tag, and another p tag.
   */
  function FormatBody() {
    const props = useParams();
    const techData = data.technology.filter(
      (technology) => technology.name.split(' ')[0] === props.techID
    );
    const technology = techData[0];
    return (
      <div className='technology subSection' key={technology.name}>
        <img src={technology.images.portrait} alt='' />
        <div className='sub-nav'>
          <ul>
            {data.technology.map((technology, i) => (
              <li key={technology.name.split(' ')[0]}>
                <Link to={`/technology/${technology.name.split(' ')[0]}`}>
                  {i + 1}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p>THE TERMINOLOGY</p>
        <h1>{technology.name}</h1>
        <p>{technology.description}</p>
      </div>
    );
  }

  return (
    <div className='technologies sub-app'>
      <Header />
      <div className='sub-section'>
        <p>
          <span className='technology--header-number'>03</span> SPACE LAUNCH 101
        </p>

        <Routes>
          <Route path=':techID' element={<FormatBody />} />
        </Routes>
      </div>
    </div>
  );
}

export default Technology;
