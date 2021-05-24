import React from "react";

import Index from "../../base/index";
import Footer from "../../base/footer";

import Display from "../../components/container/display";
import FlexDirection from "../../components/container/flex-direction";
import FlexWrap from "../../components/container/flex-wrap";
import FlexFlow from "../../components/container/flex-flow";
import JustifyContent from "../../components/container/justify-content";
import AlignItems from "../../components/container/align-items";
import AlignContent from "../../components/container/align-content";

const container = () => {
  return (
    <Index clsName="con">
      <Display />
      <FlexDirection />
      <FlexWrap />
      <FlexFlow />
      <JustifyContent />
      <AlignItems />
      <AlignContent />
      <Footer />
    </Index>
  );
};

export default container;
