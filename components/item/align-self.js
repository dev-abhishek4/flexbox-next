import React from "react";

import "./align-self.scss";
import ItemContainer from "../../components/item-container";

const itemAlignSelf = () => {
  return (
    <div className="container">
      <div className="properties">
        <h3>Align-Self</h3>
        <div className="row itemAlignSelf">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                Used to control the alignment of individual flex items. Similar to align-items of flex container.<br/>
                Default value is auto, i.e it inherits from parent align-items property. <br/>
                <br />
                .item1 &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; align-self: flex-start;<br />
                &#125;<br />.item2 &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; align-self: flex-end;<br />
                &#125;<br />.item3 &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; align-self: center;<br />
                &#125;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default itemAlignSelf;
