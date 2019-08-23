import React from "react";
import ReactDOm from "react-dom";
import SocialProfile from "./SocialProfile";
import SOCIALPROFILES from "./data/socialProfiles";

const SocialProfiles = () => {
  return (
    <div>
      <h2>Connect with me!</h2>

      {SOCIALPROFILES.map(SOCIALPROFILE => {
        return (
          <SocialProfile key={SOCIALPROFILE.id} socialProfile={SOCIALPROFILE} />
        );
      })}

      <div />
    </div>
  );
};

export default SocialProfiles;
