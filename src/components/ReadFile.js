import React, { useState } from "react";

const ReadFile = (file) => {
  const [input, setInput] = useState("");
  fetch(file)
    .then((res) => res.text())
    .then((textcontent) => {
      setInput(textcontent);
    });
  return input || "Loading...";
};

export default ReadFile;
