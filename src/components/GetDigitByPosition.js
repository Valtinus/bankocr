import React from "react";
import AlternateDigits from "./AlternateDigits";
import TranslateDigit from "./TranslateDigit";

const GetDigitByPosition = (text, position) => {
  const digitWidth = 3;
  var digit =
    "\n" +
    text
      .split("\n")
      .map((line) => {
        const start = digitWidth * position;
        const end = digitWidth * (position + 1);
        return line.slice(start, end);
      })
      .splice(0, digitWidth)
      .join("\n");
  AlternateDigits(digit);
  return TranslateDigit(digit) || "?";
};

export default GetDigitByPosition;
