import React, { useEffect, useState } from "react";
import axios from "axios";
function EffectHook() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("api was called");
      });
  }, []);
  return <div>Hello World{data}</div>;
}
export default EffectHook;
