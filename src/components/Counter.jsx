import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  const incrementby1 = () => {
    setCount((count = count + 1));
  };

  const decrementby1 = () => {
    if (count > 0) {
      setCount((count = count - 1));
    } else {
      setCount(0);
    }
  };
  return (
    <div className="flex px-10  py-2 bg-white border-2">
      <button
        className="border-2 px-2 rounded-full border-amber-300 bg-yellow"
        onClick={incrementby1}
      >
        +
      </button>
      <p className="px-4">{count}</p>
      <button
        className="border-2 px-2 rounded-full border-amber-300 bg-yellow"
        onClick={decrementby1}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
