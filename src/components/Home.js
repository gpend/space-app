import React from "react";

function Home(){
    return(
        <div className="home">
            <div className="home--copy">
                <p className="home--line-one">So, you want to travel to</p>
                <p className="home--big-text">Space</p>
                <p className="home--text">
                    Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <div className="home--button">
                <button className="home--button-explore">Explore</button>
            </div>
        </div>
    )
}

export default Home