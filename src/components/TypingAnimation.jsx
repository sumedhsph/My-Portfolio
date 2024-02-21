import React from "react";
import { TypeAnimation } from "react-type-animation";
function TypingAnimation() {
  return (
    <div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "I'm a Web Developer",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "I'm a Frontend Developer",
          1000,
          "I'm a Photo Artist",
          1000,
          "I makes Web Beautiful",
          1000,
        ]}
        wrapper="span"
        speed={40}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
}

export default TypingAnimation;
