import _ from "lodash";
import "./demo.less";
import Icon from "./icon.png";
import Data from "./data.xml";
import Notes from "./data.csv";
import TestData from "./test.json";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
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
