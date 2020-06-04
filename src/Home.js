import React, { useEffect } from "react";
// import ComingSoonScene from "./ComingSoonScene";
import HomeScene from "./HomeScene";

import { withRouter } from "react-router-dom";

function Home(props) {
  useEffect(() => {
    const meshClickCallback = (mesh) => {
      console.log("clicked", mesh);
      props.history.push("/About");
    };

    HomeScene(meshClickCallback);
  });

  return (
    <>
      <div className="sceneAbout"></div>
      <div className="pauseButton" id="pauseButton">
        PAUSE
      </div>
    </>
  );
}

export default withRouter(Home);
