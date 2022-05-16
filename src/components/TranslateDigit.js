import React from "react";
import Dictionary from "./Dictionary";

const TranslateDigit = (digit) => {
  return Object.keys(Dictionary).find((key) => {
    return Dictionary[key] === digit;
  });
};

export default TranslateDigit;
