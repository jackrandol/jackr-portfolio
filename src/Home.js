import React, { useEffect } from "react";
// import ComingSoonScene from "./ComingSoonScene";
import NavAbout from "./NavAbout";
// import NavContact from "./NavContact";
// import NavCV from "./NavCV";
// import NavProjects from "./NavProjects";

import { withRouter } from "react-router-dom";

function Home(props) {
  useEffect(() => {
    const aboutNav = (mesh) => {
      console.log("clicked", mesh);
      props.history.push("/About");
    };
    // ComingSoonScene();
    console.log("launched mesh");
    NavAbout(aboutNav);
    // NavAbout();
    // NavContact();
    // NavCV();
    // NavProjects();
  }, []);

  return (
    <>
      <div className="sceneAbout"></div>
      <div className="pauseButton" id="pauseButton">
        PAUSE
      </div>
    </>
    // <a href="http://www.github.com/jackrandol">
    //   <div className="sceneX">
    //     <div className="sceneY"></div>
    //   </div>
    // </a>
    // <div className="sceneX2">
    // <div className="sceneAbout"></div>
    /* </div>

      <div className="sceneX">
        <div className="sceneProjects"></div>
      </div>
      <div className="sceneX">
        <div className="sceneCV"></div>
      </div>
      <div className="sceneX">
        <div className="sceneContact"></div>
      </div> */
  );
}

export default withRouter(Home);
