import React from "react";

import "./home.scss";
import Index from "../base/index";
import Footer from "../base/footer";

const home = () => {
  return (
    <Index>
      <div className="homePage">
        <h2>CSS Flexible Box Module : One dimensional Layout model</h2>
        <ul>
          <li>Flexible and efficient Layout</li>
          <li>distribute space among items</li>
          <li>control their alignment</li>
        </ul>
        <h2>Other layout models:</h2>
        <ul>
          <li>Block : for sections in a page</li>
          <li>Inline : for text</li>
          <li>Table : for 2 dimensional table data</li>
          <li>Position: for explicit position of an element</li>
        </ul>
        <h2>Terminology:</h2>
        <ul>
          <li>Flex Container</li>
          <li>Flex Items</li>
          <li>Flexbox axes :</li>
          <ul>
            <li>Main Axis : default ltr</li>
            <li>Cross Axis : default ttb</li>
          </ul>
        </ul>
      </div>
      <Footer />
    </Index>
  );
};

export default home;
