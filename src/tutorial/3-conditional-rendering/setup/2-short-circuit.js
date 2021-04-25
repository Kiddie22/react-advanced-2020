import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";
  const [isError, setIsError] = useState(false);

  const setBtn = () => {
    setText("text");
  };

  return (
    <>
      {/* <h1>{firstValue}</h1> */}
      {/* <h1>value : {secondValue}</h1> */}
      <h1>{text || "it's empty"}</h1>
      {text && <h1>hello world</h1>}
      <button onClick={() => setBtn()} className="btn">
        Click
      </button>
      <button onClick={() => setIsError(!isError)} className="btn">
        Toggle Error
      </button>
      {isError && <p>there is an error</p>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <p>There is no error</p>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
