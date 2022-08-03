import React from "react";

function Button(props) {
  return (
    <div>
      <button className="btn" type={props.type}>
        {props.name} <i className="fi fi-rr-angle-right"></i>
      </button>
    </div>
  );
}
export default Button;
