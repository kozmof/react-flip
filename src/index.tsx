import * as React from "react";
import * as ReactDom from "react-dom";
import { DemoFlip } from "./components/DemoFlip";

ReactDom.render(
  <div>
    <p>Flip Demo</p>
    <DemoFlip />
  </div> ,
  document.getElementById("demo")
);
