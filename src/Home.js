import React, { useEffect } from "react";
import ComingSoonScene from "./ComingSoonScene";
import jr from "./assets/jr.jpg";

export default function Home() {
  useEffect(() => {
    ComingSoonScene();
  }, []);
  return (
    <>
      <p>Hello Jack's World</p>
      <div className="scene"></div>
      <img src={jr} alt="logo"></img>
    </>
  );
}
