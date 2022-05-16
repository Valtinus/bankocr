import React from "react";

const ValidateAccountNumber = (number) => {
  const sum = number
    .split("")
    .reverse()
    .map((i) => parseInt(i, 16))
    .reduce((previousValue, currentValue, currentIndex) => {
      return previousValue + (currentIndex + 1) * currentValue;
    });
  return sum % 11 === 0;
};

export default ValidateAccountNumber;
