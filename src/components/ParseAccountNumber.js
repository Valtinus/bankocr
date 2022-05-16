import React from "react";
import GetDigitByPosition from "./GetDigitByPosition";

const ParseAccountNumber = (text) => {
  let accountNumber = [...Array(9)].map((element, index) => {
    return GetDigitByPosition(text, index);
  });
  return accountNumber.join("");
};

export default ParseAccountNumber;
