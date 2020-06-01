import React, { useEffect } from "react";
import ComingSoonScene from "./ComingSoonScene";
import NavAbout from "./NavAbout";
import NavContact from "./NavContact";
import NavCV from "./NavCV";
import NavProjects from "./NavProjects";

export default function Home() {
  useEffect(() => {
    ComingSoonScene();
    NavAbout();
    NavContact();
    NavCV();
    NavProjects();
  }, []);
  return (
    <>
      <a href="http://www.github.com/jackrandol">
        <div className="sceneX">
          <div className="sceneY"></div>
        </div>
      </a>
      <div className="sceneAbout"></div>
      <div className="sceneProjects"></div>
      <div className="sceneCV"></div>
      <div className="sceneContact"></div>
      <div className="pauseButton">PAUSE</div>
    </>
  );
}
