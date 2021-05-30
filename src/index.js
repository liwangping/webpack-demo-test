import _ from "lodash";
import "./demo.less";
import "./style.css";
import Icon from "./icon.png";
import Data from "./data.xml";
import Notes from "./data.csv";
import TestData from "./test.json";

function component() {
  const element = document.createElement("div");
  let eles = true;
  let it = {
    name: "lwp",
  };
  console.log("test:", eles ?? 1);
  console.log("test:", it?.name);

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello2", "webpack"], " ");
  element.classList.add("hello");

  // add thw image to our existing div
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);
  console.log(TestData);

  return element;
}

document.body.appendChild(component());
