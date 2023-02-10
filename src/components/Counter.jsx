import React from "react";
import { useState, useEffect } from "react";

function Counter() {
  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    document.title = `${
      cnt > 0 ? "Positive" : cnt === 0 ? "Zero" : "Negative"
    }`;
  });
  return (
    <div>
      <div className="text-center font-mono my-10 bg-blue-100 rounded-xl m-auto px-5 md:w-[50%] p-10">
        <div>
          <button
            onClick={() => setCnt(cnt + 1)}
            className="bg-blue-400 font-bold text-[20px] px-5 py-2 rounded-tl-md rounded-bl-md active:bg-blue-500 text-white"
          >
            +
          </button>
          <button
            onClick={() => setCnt(0)}
            className="bg-blue-200 text-[20px] px-5 py-2 active:bg-blue-100 "
          >
            RESET
          </button>
          <button
            onClick={() => setCnt(cnt - 1)}
            className="bg-blue-400 font-bold text-[20px] px-5 py-2  rounded-tr-md rounded-br-md active:bg-blue-500 text-white"
          >
            -
          </button>
        </div>
        <h1 className="text-[30px]"> counter: {cnt} </h1>
      </div>
    </div>
  );
}
export default Counter;
