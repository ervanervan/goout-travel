import React from "react";

export default function Button(props) {
  return (
    <button
      type={props.type}
      className={`py-3 px-6 font-medium
        ${props.className && props.className} 
        ${
          props.isPrimary && "bg-bgPrimary text-sm lg:text-base text-textWhite"
        } 
        ${props.isBook && "bg-bgPrimary text-xs lg:text-sm text-textWhite"} 
        ${props.isWhite && "bg-bgWhite text-sm lg:text-base text-textGray"} 
        ${props.isSecondary && "text-textPrimary bg-bgDarkGray"} rounded-xl`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
