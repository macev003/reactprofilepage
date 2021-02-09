import React from "react";
import me from "../assets/me.jpg";

function Home() {
  return (
    <div>
      <div className="columns">
        <div className="column is-1"></div>
        <p className="column">
          Hello and welcome. My name is Maira Acevedo and I am a new web development student. I enrolled in the coding bootcamp through 
          UC Riverside's Extension program. This is a whole new, exciting, and challenging change for me. I am continuing to work on 
          grasping a deeper understanding of how coding works. I am a Southern California native. I am married with two children, who are
          the light of my life. This career change is due in large part to them. It is never too late to change careers or learn new tricks. 
          <br />
          <br />
          I completed the UCR Extension Trilogy Full Stack Web Development course in January 2021. I now have
          experience with HTML, CSS, Bootstrap, Node, Javascript, SQL, Mongo, and React. <br />
          <br />
        </p>
        <div className="column is-1"></div>
      </div>

      <div className="column is-full has-text-centered">
        <img src={me} alt="Maira"></img>
        <br></br>
        <a href="https://github.com/macev003" target="blank">
          Github
        </a>
        <br />
        
        <a
          href="www.linkedin.com/in/maira-acevedo"
          
          target="blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Home;