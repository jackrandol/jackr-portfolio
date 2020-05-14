import React, { useEffect, Link } from "react";
import ComingSoonScene from "./ComingSoonScene";

export default function Home() {
  useEffect(() => {
    ComingSoonScene();
  }, []);
  return (
    <div>
      <a href="http://www.github.com/jackrandol">
        <div className="sceneX">
          <div className="sceneY"></div>
        </div>
      </a>
    </div>
  );
}
