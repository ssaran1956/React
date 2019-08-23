import React, { Component } from "react";
import ReactDOM from "reacT-DOM";
import Biography from "./Biography";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import myPicture from "./Assets/thisIsMe.jpeg";
import Title from "./Title";

class Portfolio extends Component {
  state = { displayBio: false };

  toggleDislayBio = () => {
    let newState = { displayBio: !this.state.displayBio };
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <img src={myPicture} alt="myPicture" className="profile" />
        <h1>Hello!</h1>
        <p>My name is Salih Saran.</p>
        <Title />
        <p>I am always looking forward to working on meaningful projects.</p>
        <Biography
          toggleBio={this.toggleDislayBio}
          displayBio={this.state.displayBio}
        />
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default Portfolio;
