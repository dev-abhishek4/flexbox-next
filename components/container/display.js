import React from "react";

import "./display.scss";
import ItemContainer from "../../components/item-container";

const display = () => {
  return (
    <div className="container">
      <div className="properties">
        <h3>Display</h3>
        <div className="row display-prop">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                display : flex <br /> default direction left to right
              </div>
            </div>
          </div>
        </div>
        <div className="row display-prop-inline-flex">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
              display: inline-flex <br/>
                To reduce the width of container to the
                width of the items<br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default display;
