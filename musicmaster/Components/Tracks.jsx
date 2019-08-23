import React, { Component } from "react";

class Tracks extends Component {
  state = {
    playing: false,
    audio: null,
    playingPreviewUrl: null
  };

  playAudio = previewUrl => () => {
    const audio = new Audio(previewUrl);
    if (!this.state.playing) {
      this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
      audio.play();
    } else {
      this.state.audio.pause();
      if (this.state.playingPreviewUrl === previewUrl) {
        this.setState({ playing: false });
      } else {
        audio.play();
        this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
      }
    }
  };

  render() {
    //if (this.props.tracks.length == 0) return null;
    const { tracks } = this.props;
    return (
      <dev>
        {tracks.map(track => {
          const { id, name, album, preview_url } = track;
          return (
            <div key={id} onClick={this.playAudio(preview_url)}>
              <img src={album.images[0].url} alt="track-image" />
              <p>{name}</p>
            </div>
          );
        })}
      </dev>
    );
  }
}

export default Tracks;
