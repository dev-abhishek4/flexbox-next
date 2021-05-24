import React from "react";

import "./align-content.scss";
import ItemContainer from "../../components/item-container";

const alignContent = () => {
  return (
    <div className="container">
      <div className="properties">
        <h3>Align-Content</h3>
        it aligns lines of content along cross axis. It can be seen as mix of
        justify-content and align-items.<br />#Important Condition : Multiple
        lines or multiple rows must exist within container otherwise it would
        have no effect!!
        <div className="row align-content">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                align-content: stretch<br />
                default value.
              </div>
            </div>
          </div>
        </div>
        <div className="row align-content-start">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                align-content: flex-start<br />
                Pushes the contents on the top
              </div>
            </div>
          </div>
        </div>
        <div className="row align-content-end">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                align-content: flex-end<br />
                Pushes the contents on the bottom
              </div>
            </div>
          </div>
        </div>
        <br />
        Similarly we can use center, space-between, space-around
      </div>
    </div>
  );
};

export default alignContent;
