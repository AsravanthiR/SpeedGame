import { Button } from "@material-ui/core";
import React from "react";

const Nappula = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.color,
        pointerEvents: props.disabled ? "auto" : "none",
      }}
      className={`nappula ${props.active ? "active" : ""}`}
      onClick={props.click}
    ></div>
  );
};
export default Nappula;
