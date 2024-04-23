import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        I'm a passionate software developer with a keen eye for detail and a
        knack for problem-solving. My journey into the world of coding began
        with a curiosity that evolved into a deep-seated passion. With a solid
        foundation in various programming languages and frameworks, I thrive in
        dynamic environments where I can apply my skills to create innovative
        solutions. Continuously learning and adapting to new technologies, I
        strive to push the boundaries of what's possible, all while
        collaborating with teams to deliver exceptional software products that
        make a difference.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
