import React from "react";

import Index from "../../base/index";
import Footer from "../../base/footer";

import Itemorder from "../../components/item/order";
import ItemFlexGrow from "../../components/item/flex-grow";
import ItemFlexShrink from "../../components/item/flex-shrink";
import ItemFlexBasis from "../../components/item/flex-basis";
import ItemFlex from "../../components/item/flex";
import ItemAlignSelf from "../../components/item/align-self";

const item = () => {
  return (
    <Index clsName="ite">
      <Itemorder />
      <ItemFlexGrow />
      <ItemFlexShrink />
      <ItemFlexBasis />
      <ItemFlex />
      <ItemAlignSelf />
      <Footer />
    </Index>
  );
};

export default item;
