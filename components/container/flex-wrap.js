import React from "react";

import "./flex-wrap.scss";
import ItemContainer from "../../components/item-container";

const flexWrap = () => {
  return (
    <div className="container">
      <div className="properties">
        <h3>Flex-Wrap</h3>
        <div className="row default-wrap">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                flex-wrap: nowrap<br />
                item overflows when they can't fit in view
              </div>
            </div>
          </div>
        </div>
        <div className="row wrap">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                flex-wrap: wrap<br />
                item moves to next line when they can't fit in view
              </div>
            </div>
          </div>
        </div>
        <div className="row wrap-reverse">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                flex-wrap: wrap-reverse<br />
                item moves to previous line when they can't fit in view
              </div>
            </div>
          </div>
        </div>
        <div className="row nowrap-column">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
              flex-direction: column <br/>
              flex-wrap: nowrap <br/>
              item overflows the container
              </div>
            </div>
          </div>
        </div>
        <div className="row wrap-column">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
              flex-direction: column <br/>
              flex-wrap: wrap <br/>
              a column is created on the right
              </div>
            </div>
          </div>
        </div>
        <div className="row wrap-column-reverse">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
              flex-direction: column <br/>
              flex-wrap: wrap-reverse <br/>
              a column is created on the left
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default flexWrap;
