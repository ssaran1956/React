import React, { Component } from "react";

class Artist extends Component {
  state = {};

  render() {
    if (!this.props.artist) return null;

    const { images, name, followers, genres } = this.props.artist;

    return (
      <div>
        <h3>{name}</h3>
        <p>{followers.total} followers</p>
        <p>{genres.join(",")}</p>
        <img
          src={images[0] && images[0].url}
          alt="artist-profile"
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            objectFit: "cover"
          }}
        />
      </div>
    );
  }
}

export default Artist;

// const  Artist = ({artist}) => {

//     const {images, name, followers, genres} = artist;
//         return (
//             <div>
//                 <h3>{name}</h3>
//                 <p>{followers.total} followers</p>
//                 <p>{genres.join(",")}</p>
//                 <img src={images[0].url} alt="artist-profile" />
//             </div>

//         )

// export default Artist;
