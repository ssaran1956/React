import React, { Component } from "react";
import { FormGroup, FormControl, InputGroup, Button } from "react-bootstrap";
import Artist from "./Artist";
import Tracks from "./Tracks";
// } from "react-bootstrap";
import Glyphicon from "react-bootstrap";
//import "react-bootstrap/dist/react-bootstrap.js";

const BASE_URL = "https://spotify-api-wrapper.appspot.com";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = { query: "", artist: null, tracks: [] };

  search = () => {
    /*
        SPOTIFY
        Client ID       3fc2b79dba95428e97f925eafbe7ae45
        Client Secret   89bbc68730f641a99ae8fb0a3a5933a5
      */

    fetch(`${BASE_URL}/artist/${this.state.query}`)
      .then(response => response.json())
      .then(json => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];
          this.setState({ artist });

          fetch(`${BASE_URL}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => {
              const tracks = json.tracks;
              this.setState({ tracks });
            })
            .catch(error => alert(error.message));
        }
      })
      .catch(error => alert(error.message));
  };

  render() {
    console.log("this.state", this.state);
    return (
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup size="sm" className="mb-3">
            <FormControl
              type="text"
              placeholder="Search for an artisit ..."
              quiery={this.state.query}
              onChange={event => {
                this.setState({ query: event.target.value });
              }}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.search();
                }
              }}
            />
            <InputGroup.Append onClick={this.search}>
              <Button className="glyphicon glyphicon-search" />
            </InputGroup.Append>
          </InputGroup>
        </FormGroup>
        <div className="Profile">
          <Artist artist={this.state.artist} />
        </div>

        <div className="Galery">
          <Tracks tracks={this.state.tracks} />
        </div>
      </div>
    );
  }
}

export default App;
