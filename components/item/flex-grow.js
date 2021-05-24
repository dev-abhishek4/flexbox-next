import React from "react";

import "./flex-grow.scss";
import ItemContainer from "../../components/item-container";

const itemFlexGrow = () => {
  return (
    <div className="container">
      <div className="properties">
        <h3>Flex-Grow</h3>
        <div className="row itemFlexGrow">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                This property specifies what amount of space inside the flex
                container can take up if necessary. Always relative to the size
                of other items in the container.<br />
                flex-grow : 0; &nbsp;&nbsp;&nbsp;&nbsp;// default value
                <br />
                <br />
                .item1 &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; flex-grow: 1;<br />
                &#125;<br />.item2 &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; flex-grow: 2;
                &nbsp;&nbsp;&nbsp;&nbsp;// item 2 grows twice the size of item 1<br
                />
                &#125;<br />.item3 &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<br />
                &#125;
              </div>
            </div>
          </div>
        </div>
        <div className="row itemFlexGrowEqual">
          <ItemContainer />
          <div className="col-sm-6">
            <div className="item-description">
              <div className="description">
                If you want all the elements/items to grow equally and consume all the
                space of container, for every element/item use <br />flex-grow:
                1 &nbsp;&nbsp;&nbsp;&nbsp;// or we can use a class and provide it to all the items
                <br /><br/>
                .item1 &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; flex-grow: 1;<br />
                &#125;<br />.item2 &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; flex-grow: 1;<br />
                &#125;<br />.item3 &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; flex-grow: 1;<br />
                &#125;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default itemFlexGrow;
