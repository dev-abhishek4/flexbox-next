import React from "react";

import "./flex.scss";
import ItemContainer from "../../components/item-container";

const itemFlex = () => {
  return (
    <div className="container">
      <div className="properties">
        <h3>Flex</h3>
        <div className="row itemFlex">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                Shorthand for flex-grow, flex-shrink and flex-basis.<br />
                flex : flex-grow flex-shrink flex-basis<br />
                flex: 0 1 auto; &nbsp;&nbsp;&nbsp;&nbsp;//default value<br />
                <br />
                .item1 &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; flex: 0 1 150px;<br />
                &#125;<br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">Variations :</div>
          <div className="col-sm-6">
            /* One value, unitless number: flex-grow */<br />
            flex: 2;<br />
            <br />
            /* One value, width/height: flex-basis */<br />
            flex: 10em;<br />
            flex: 30px;<br />
            <br />
            /* flex: none | initial | auto */<br />
            <br />
            /* Two values: flex-grow | flex-basis */<br />
            flex: 1 30px;<br />
            <br />
            /* Two values: flex-grow | flex-shrink */<br />
            flex: 2 2;
          </div>
        </div>
      </div>
    </div>
  );
};

export default itemFlex;
