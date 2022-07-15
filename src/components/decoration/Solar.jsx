import React from "react";
import "./solar.css";

// add the light reflect to the solar thingy
import Tilt from "react-parallax-tilt";

export default function Solar() {
  return (
    <Tilt
      className="solar m-3 ms-auto"
      tiltEnable={false}
      glareEnable={true}
      glareBorderRadius="10px"
      glareMaxOpacity={0.8}
      glareColor="white"
      glarePosition="bottom"
    >
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </Tilt>
  );
}
