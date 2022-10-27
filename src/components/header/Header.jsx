import React from "react";
import TaskPng from "../../assets/TaskPng";

const Header = () => {
  return (
    <div>
      <div className="d-flex justify-content-evenly">
        <TaskPng />
        <h1 className="display-5 text-light">TASK TRACKER</h1>
      </div>
    </div>
  );
};

export default Header;
