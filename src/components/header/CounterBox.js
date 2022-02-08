import React from "react";
import { useState, useEffect } from "react";

const CounterBox = (props) => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < props.number) setcount(count + 1);
    }, 60);
    return () => clearTimeout(timer);
  }, [count,props.number]);

  return <p className="m-0 mt-2 fs-2 fw-light">{count}</p>;
};

export default CounterBox;
