import React from "react";

import "./order.scss";
import ItemContainer from "../../components/item-container";

const itemOrder = () => {
  return (
    <div className="container">
      <div className="properties">
        <h3>Order</h3>
        <div className="row itemOrder">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                By default item appears as they are present in the code and
                order of all items is 0. order can take only integer values.
                <br />
                .item1 &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; order: 1;<br />
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

export default itemOrder;
