import React from "react";

export default function Button(props) {
  return (
    <button
      type={props.type}
      className={`py-3 px-6 font-medium
        ${props.className && props.className} 
        ${props.isPrimary && "bg-bgPrimary text-base text-textWhite"} 
        ${
          props.isSecondary && "text-textPrimary bg-bgDarkGray"
        } text-base rounded-xl`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
