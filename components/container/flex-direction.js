import React from "react";

import "./flex-direction.scss";
import ItemContainer from "../../components/item-container";

const flexDirection = () => {
  return (
    <div className="container">
      <div className="properties">
        <h3>Flex-Direction</h3>
        <div className="row display-direction">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                flex-direction : row <br />default
              </div>
            </div>
          </div>
        </div>
        <div className="row display-direction-row-reverse">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">flex-direction : row-reverse</div>
            </div>
          </div>
        </div>
        <div className="row display-direction-column">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                flex-direction : column
              </div>
            </div>
          </div>
        </div>
        <div className="row display-direction-column-reverse">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">flex-direction : column-reverse</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default flexDirection;
