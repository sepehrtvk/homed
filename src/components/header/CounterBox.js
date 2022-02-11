import React from "react";
import { useState, useEffect } from "react";

const CounterBox = (props) => {
  const [count, setcount] = useState(0);
  const e2p = (s) => s.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < props.number) setcount(count + 1);
    }, props.speed);
    return () => clearTimeout(timer);
  }, [count, props.number]);

  return <p className="m-0 mt-2 fs-2 fw-light">{e2p(count.toString())}</p>;
};

export default CounterBox;
