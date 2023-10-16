import React from "react";

export default function Button(props) {
  return (
    <button
      type={props.type}
      className={`py-3 px-6 font-medium
        ${props.className && props.className} 
        ${
          props.isPrimary &&
          "bg-bgPrimary text-sm lg:text-base text-textWhite rounded-xl"
        } 
        ${
          props.isBook &&
          "bg-bgPrimary text-xs font-normal lg:text-sm text-textWhite rounded-xl"
        } 
        ${
          props.isWhite &&
          "bg-bgWhite text-sm lg:text-base text-textGray rounded-xl"
        } 
        ${
          props.isWhiteMore &&
          "bg-bgWhite border border-textSecondary rounded-full text-sm lg:text-base text-textGray"
        } 
        ${props.isSecondary && "text-textPrimary bg-bgGray rounded-xl"}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
