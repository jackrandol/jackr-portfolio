import React, { useEffect, Link } from "react";
import ComingSoonScene from "./ComingSoonScene";

export default function Home() {
  useEffect(() => {
    ComingSoonScene();
  }, []);
  return (
    <div>
      <div className="header">
        <p>
          Jack Randol's website is under construction. For now visit my{" "}
          <a href="http://www.github.com/jackrandol">Github.</a>
        </p>
      </div>
      <div className="sceneX">
        <div className="sceneY"></div>
      </div>
    </div>
  );
}
