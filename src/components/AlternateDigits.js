import React from "react";
import Dictionary from "./Dictionary";
import TranslateDigit from "./TranslateDigit";

const AlternateDigits = (number) => {
  var alternates = [];
  Object.values(Dictionary).forEach((rawDigit) => {
    var diffCount = 0;
    for (var i = 0; i < rawDigit.length; i++) {
      if (number.substring(i, i + 1) != rawDigit.substring(i, i + 1)) {
        diffCount++;
      }
      if (diffCount > 1) {
        break;
      }
    }
    if (diffCount === 1) {
      alternates.push(Dictionary[TranslateDigit(rawDigit)]);
    }
  });
  return alternates;
};

export default AlternateDigits;
