import _ from "lodash";
import { displayMouseCoords } from "./coordsDisplay"; //dodaje sie automatycznie
import "./style.css";

document.addEventListener(
  "mousemove",
  _.throttle((e) => {
    displayMouseCoords({
      x: e.x,
      y: e.y,
    });
  }, 300)
);

// new comment
