import React from "react";
import ReactDOM from "react-dom";
import { clearScreenDown } from "readline";
import "./css/project.css";

const Project = props => {
  const { title, image, description, link } = props.project;
  return (
    <div className="projectDiv">
      <h3>{title}</h3>
      <img src={image} alt="profile" className="projectPict" />
      <p>{description}</p>
      <a href={link}>{link}</a>
    </div>
  );
};

export default Project;
