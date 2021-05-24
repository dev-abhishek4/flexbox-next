import React from "react";

import "./flex-shrink.scss";
import ItemContainer from "../../components/item-container";

const itemFlexShrink = () => {
  return (
    <div className="container">
      <div className="properties">
        <h3>Flex-Shrink</h3>
        <div className="row itemFlexShrink">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                Defines the ability of an item to shrink if necessary.<br />Relative
                to the other items in the container.
                <br />flex-shrink : 1; &nbsp;&nbsp;&nbsp;&nbsp;//default value<br />
                Shrinking is possible only upto certain point. After which items
                will start to overflow.
                <br />
                <br />
                .item1 &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; width: 150px;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; flex-shrink: 0;<br />
                &#125;<br />.item2 &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; width: 150px;<br />
                &#125;<br />.item3 &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; width: 150px;<br />
                &#125;<br />
                // here only item2 and item3 will shrink because they have
                default value of flex-shrink (i.e 0) but item1 will have fixed
                width and wouldn't shrink when the window width is decreased or
                increased.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default itemFlexShrink;
