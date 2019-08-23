import React from "react";
import ReactDOM from "react-dom";

const SocialProfile = props => {
  const { name, icon, link } = props.socialProfile;
  return (
    <div style={{ display: "inline-block", margin: 10 }}>
      <a href={link}>
        <span>{name}</span>
        <img src={icon} alt={name} style={{ width: 30, height: 30 }} />
      </a>
    </div>
  );
};

export default SocialProfile;
