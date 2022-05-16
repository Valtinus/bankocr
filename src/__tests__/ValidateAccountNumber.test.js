import React from "react";
import ValidateAccountNumber from "../components/ValidateAccountNumber";

const testnum1 = "000000000";
const testnum2 = "123456789";
const testnum3 = "111111111";
const testnum4 = "ABCDEFACE";
const testnum5 = "00000000B";
const testnum6 = "12345?789";

test("Validates given number correctly", () => {
  expect(ValidateAccountNumber(testnum1)).toBe(true);
  expect(ValidateAccountNumber(testnum2)).toBe(true);
  expect(ValidateAccountNumber(testnum3)).toBe(false);
  expect(ValidateAccountNumber(testnum4)).toBe(false);
  expect(ValidateAccountNumber(testnum5)).toBe(true);
  expect(ValidateAccountNumber(testnum6)).toBe(false);
});
