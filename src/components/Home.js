import React from "react";
import Header from "./Header";
import data from "../assets/shared/data.json";

function Home() {
  return (
    <div className='home sub-app'>
      <Header />
      <div className='home--body'>
        <div className='home--copy'>
          <p className='home--line-one'>SO, YOU WANT TO TRAVEL TO</p>
          <p className='home--big-text'>SPACE</p>
          <p className='home--text'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className='home--button'>
          <button className='home--button-explore' onClick={GoRandom}>
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

function GoRandom() {
  var category = Math.floor(Math.random() * 3 + 1);
  var item = 0;
  if (category !== 3) {
    item = Math.floor(Math.random() * 4);
  } else {
    item = Math.floor(Math.random() * 3);
  }

  switch (category) {
    case 1:
      category = "destinations";
      break;

    case 2:
      category = "crew";
      break;

    case 3:
      category = "technology";
      break;

    default:
      break;
  }
  var name = data[category][item].name;
  if (category === "crew") {
    name = name.split(" ")[1];
  }
  if (category === "destinations") {
    category = "destination";
  }
  if (category === "technology") {
    name = name.replace(" ", "_")
  }

  window.location.href = `/${category}/${name}`;
}
