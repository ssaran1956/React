import React, { Component } from "react";
import ReactDOM from "reacT-DOM";

const Biography = props => {
  return (
    <div>
      {props.displayBio ? (
        <div>
          <p>I live in Winnipeg, and code every day.</p>
          <p>
            My favorite languages are JavaScript, Java, and C#, and I think
            React.js is awesome.
          </p>
          <p>
            Besides coding, I also love music and spending time with my
            granddaughter.
          </p>
          <div>
            <button
              onClick={props.toggleBio}
              className="btn btn-warning btn-sm m-1"
            >
              Reade Less
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={props.toggleBio}
            className="btn btn-warning btn-sm m-1"
          >
            Reade More
          </button>
        </div>
      )}
    </div>
  );
};

export default Biography;
