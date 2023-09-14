import React from "react";

const Button = (props) => {
  return (
    <button className="px-4 py-1 bg-slate-600 rounded-sm z-0">
      {props.children}
    </button>
  );
};

export default Button;
