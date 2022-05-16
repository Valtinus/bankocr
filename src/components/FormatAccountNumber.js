import React from "react";
import IsInvalid from "./IsInvalid";
import ValidateAccountNumber from "./ValidateAccountNumber";

const FormatAccountNumber = (number) => {
  if (!number) return false;
  if (IsInvalid(number)) return number + " - ILL";
  if (!ValidateAccountNumber(number)) return number + " - ERR";
  return number + " - OK";
};

export default FormatAccountNumber;
