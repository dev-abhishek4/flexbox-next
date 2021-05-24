import React from "react";

import "./flex-flow.scss";
import ItemContainer from "../../components/item-container";

const flexFlow = () => {
  return (
    <div className="container">
      <div className="properties">
        <h3>Flex-Flow : Shorthand representation of flex-direction and flex-wrap</h3>
        <div className="row flex-flow-default">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">flex-flow: row nowrap<br/>default value. We can do any combination of flex-direction and flex-wrap.</div>
            </div>
          </div>
        </div>
        <div className="row flex-flow-row-reverse-wrap">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">flex-flow: row-reverse wrap</div>
            </div>
          </div>
        </div>
        <div className="row flex-flow-column-reverse-wrap-reverse">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">flex-flow: column-reverse wrap-reverse</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default flexFlow;
