import React from "react";

import "./index.scss";

const footer = props => {
  return (
    <div className="footer">
      <span className="footerText">Created with</span>
      <a href="https://nextjs.org/" target="_blank">
        <img className="footerIcon" src="http://13.126.214.172/images/nextJs.ico" />
      </a>
    </div>
  );
};

export default footer;
