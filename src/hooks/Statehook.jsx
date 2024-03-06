import React, { useState } from "react";

const Statehook = () => {
  const [inputValue, setInputValue] = useState("Hello World");

  return (
    <div>
      <input
        placeholder="enter something..."
        onChange={(event) => setInputValue(event.target.value)}
      />
      {inputValue}
    </div>
  );
};

export default Statehook;
