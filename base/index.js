import React from "react";
import Link from "next/link";

import IndexHead from "./index-head";
import "./index.scss";

const index = props => {
  return (
    <div>
      <IndexHead clsName={props.clsName} />
      <nav className={props.clsName}>
        <ul>
          <li>
            <a href="/">My Notes</a>
          </li>
          <li>
            <Link href="/">
              <a>
                <img
                  className="homeIcon"
                  src="http://13.126.214.172/images/Home_icon_black.png"
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/container">
              <a className="one">Container</a>
            </Link>
          </li>
          <li id="2">
            <Link href="/item">
              <a className="two">Item</a>
            </Link>
          </li>
        </ul>
      </nav>
      <section>{props.children}</section>
    </div>
  );
};

export default index;
