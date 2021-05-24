import React from "react";

import "./flex-basis.scss";
import ItemContainer from "../../components/item-container";

const itemFlexBasis = () => {
  return (
    <div className="container">
      <div className="properties">
        <h3>Flex-Basis</h3>
        <div className="row itemFlexBasis">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                flex-basis defines the initial size of a flex item before extra space is distributed. This is alternative to width property. By default flex-basis is equal to item size.<br/>flex-grow and flex-shrink is applied on top of flex-basis.
                <br/>
                <br />
                .item1 &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; flex-basis: 200px;<br />
                &#125;<br />.item2 &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<br />
                &#125;<br />.item3 &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<br />
                &#125;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default itemFlexBasis;
