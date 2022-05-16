import React from "react";
import ParseAccountNumber from "./ParseAccountNumber";
import FormatAccountNumber from "./FormatAccountNumber";
import ReadFile from "./ReadFile";

const ParseAccountFile = ({ file }) => {
  const input = ReadFile(file);
  const line_height = 4;
  const lines = input.split("\n");
  const accounts = [];
  while (lines.length) {
    accounts.push(lines.splice(0, line_height).join("\n"));
  }
  return accounts
    .map((text) => {
      if (!text) return;
      return ParseAccountNumber(text);
    })
    .map((number) => {
      return FormatAccountNumber(number);
    })
    .filter((account) => account)
    .join("\n");
};

export default ParseAccountFile;
