import React from "react";
import Head from "next/head";

const indexHead = (props) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>{props.clsName ? props.clsName === 'ite' ? 'item' : 'container' : 'flexbox'}</title>
      <link rel="stylesheet" href="http://13.126.214.172/vendor/bootstrap-grid.min.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Dancing+Script|Lato"
        rel="stylesheet"
      />
    </Head>
  );
};

export default indexHead;
