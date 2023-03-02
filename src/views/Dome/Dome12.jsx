import React, { useState, useEffect, useLayoutEffect } from "react";
export default function Dome12() {
  console.log("render")
  let [num, setNum] = useState(0);
  // 再试试useLayoutEffect
  useEffect(() => {
    if (num === 0) {
      let random = +String(Math.random()).substring(2);
      setNum(random);
    }
  }, [num]);
  return <div
      style={{
        height: 400,
        background: 'lightblue',
        WebkitUserSelect: "none"
      }}
      onClick={() => {
        setNum(0);
      }}>
    {num}
  </div>;
};
