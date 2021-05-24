import React from "react";

import "./justify-content.scss";
import ItemContainer from "../../components/item-container";

const justifyContent = () => {
  return (
    <div className="container">
      <div className="properties">
        <h3>Justify Content</h3>
        Defines the alignment along the main axis
        <div className="row justify-content">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                justify-content: flex-start;
                <br />default value. Places all the item at the begining(start)
                of the container
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                justify-content: flex-end;
                <br />Places all the item at the end of the container
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                justify-content: center;
                <br />Places all the item in the middle of the container
              </div>
            </div>
          </div>
        </div>
        <br />
        We can also specify how to utilize the extra space
        <div className="row justify-content-space-between">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                justify-content: space-between;
                <br />Places equal space in between the items.
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-space-around">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                justify-content: space-around;
                <br />Places equal space in between the items and half of that
                space before first and after last item
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-space-evenly">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                justify-content: space-evenly;
                <br />Places equal space in between the items and before first
                and after last item
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-column">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                flex-direction: column<br />
                justify-content: space-around;
                <br />Places equal space in between the items and half of that
                space before first and after last item vertically
              </div>
            </div>
          </div>
        </div>
        <br />
        similarly other combinations can be made with flex-direction: column
      </div>
    </div>
  );
};

export default justifyContent;
