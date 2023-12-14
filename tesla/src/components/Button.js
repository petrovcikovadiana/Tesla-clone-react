import React from "react";

function Button(props) {
  return (
    <button className=" text-white py-2 px-3  md:ml-5 duration-500">
      {props.children}
    </button>
  );
}

export default Button;
