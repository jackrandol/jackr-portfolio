import React, { useEffect } from "react";
import ComingSoonScene from "./ComingSoonScene";

export default function Home() {
  useEffect(() => {
    ComingSoonScene();
  }, []);
  return (
    <>
      <p>Hello Jacks World</p>
    </>
  );
}
