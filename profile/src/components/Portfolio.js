import React from "react";
import employeetracker from "../assets/employeetracker.jpg";
import password from "../assets/password.png";
import work from "../assets/work.png";


function Portfolio() {
  return (
      <div>
    <div className="columns">
      
      {/* Password Generator */}
      <div className="column">
        <a
          href="https://macev003.github.io/passwordgeneratorHW/"
          target="blank"
        >
          <img src={password} alt="Password Generator"></img>
        </a>
        <h1 className="has-text-centered">Password Generator</h1>
        <div className="has-text-centered">
          <a href="https://macev003.github.io/passwordgeneratorHW/" target="blank">
            GitHub Repository
          </a>
        </div>
    </div>

    {/* Project 2 Work in Progress */}
    <div className="column">
        <a
          href="https://mecc-project2.herokuapp.com/"
          target="blank"
        >
          <img src={work} alt="Work in Progress"></img>
        </a>
        <h1 className="has-text-centered">Work in Progress</h1>
        <div className="has-text-centered">
          <a href="https://github.com/codymu45/workInProgress.git" target="blank">
            GitHub Repository
          </a>
        </div>
    </div>
</div>

<div className="columns">


{/* Employee Tracker*/}
<div className="column">
  <a
    href="https://macev003.github.io/EmployeeTracker/"
    target="blank"
  >
    <img src={employeetracker} alt="Employee Tracker"></img>
  </a>
  <h1 className="has-text-centered">Employee Tracker</h1>
  <div className="has-text-centered">
    <a href="https://macev003.github.io/EmployeeTracker/" target="blank">
      GitHub Repository
    </a>
  </div>
</div>

</div>
</div>
  );
}

export default Portfolio;