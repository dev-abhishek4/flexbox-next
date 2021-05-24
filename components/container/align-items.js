import React from "react";

import "./align-items.scss";
import ItemContainer from "../../components/item-container";

const alignItems = () => {
  return (
    <div className="container">
      <div className="properties">
        <h3>Align-Items</h3>
        Defines alignment along cross axis
        <div className="row align-items">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">align-items: stretch<br/>
              default value. 
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-flex-start">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">align-items: flex-start<br/>
              This will make items to be on top and take only the space needed
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-flex-end">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">align-items: flex-end<br/>
              This will make items to be on bottom and take only the space needed
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">align-items: center<br/>
              This will make items to be on middle and take only the space needed
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-baseline">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">align-items: baseline<br/>
              a common baseline for all the items
              </div>
            </div>
          </div>
        </div>
        <br/>
        we can try more with flex-direction: column
      </div>
    </div>
  );
};

export default alignItems;
