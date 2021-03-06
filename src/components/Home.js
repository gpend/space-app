import React from "react";
import Header from "./Header"

function Home(){
    return(
        <div className="home subApp">
            < Header />
            <div className="home--body">
                <div className="home--copy">
                    <p className="home--line-one">SO, YOU WANT TO TRAVEL TO</p>
                    <p className="home--big-text">SPACE</p>
                    <p className="home--text">
                        Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className="home--button">
                    <button className="home--button-explore">EXPLORE</button>
                </div>
            </div>
        </div>
    )
}

export default Home