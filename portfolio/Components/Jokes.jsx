import React, { Component } from "react";
import ReactDOM from "react-dom";

class Jokes extends Component {
  state = { joke: { status: "unknown" } };

  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_joke").then(
      response => {
        this.extarctJson(response.json());
      }
    );
  }

  extarctJson = responseJson => {
    responseJson.then(json => {
      this.changeStste(json);
    });
  };

  changeStste = json => {
    this.setState({ joke: json });
  };

  render() {
    return (
      <div>
        <p>{this.state.joke.setup}</p>
        <em>{this.state.joke.punchline}</em>
      </div>
    );
  }
}

export default Jokes;
