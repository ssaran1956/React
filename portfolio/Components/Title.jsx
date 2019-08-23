import React, { Component } from "react";
import ReactDom from "react-dom";

const TITLES = [
  "a software engineer",
  "a music lower",
  "an enthusiastic learner",
  "an adventure seeker"
];

class Title extends Component {
  state = {
    titleIndex: 0,
    fadeIn: true
  };

  componentDidMount() {
    setTimeout(this.switchfadeIn, 2000);
    this.animateTitles();
  }
  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.tomeOut);
  }

  switchfadeIn = () => {
    this.timeout = this.setState({ fadeIn: false });
  };

  startAnimation = () => {
    const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
    this.setState({ titleIndex, fadeIn: true });
    setTimeout(this.switchfadeIn, 2000);
  };

  animateTitles = () => {
    this.titleInterval = setInterval(this.startAnimation, 4000);
  };

  render() {
    const { fadeIn, titleIndex } = this.state;
    const title = TITLES[titleIndex];
    return (
      <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>
        I am {title}
      </p>
    );
  }
}

export default Title;
