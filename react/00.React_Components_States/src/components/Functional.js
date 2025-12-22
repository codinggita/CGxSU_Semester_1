import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";

export default function CounterFunctional() {
  const [count, setCount] = useState(100);
  const [count2, setCount2] = useState(100);


  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        // setData(response.data[0].email);
        console.log(response);
        console.log("API WAS CALLED");
      });
      fetch("https://jsonplaceholder.typicode.com/comments")
      .then()
      .then()
      .catch()
    console.log("UseEffect1");
  },[count]);

  useLayoutEffect(()=>{
    console.log("UseLayoutEffect2");
  })
  
  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/comments")
    //   .then((response) => {
    //     // setData(response.data[0].email);
    //     console.log(response);
    //     console.log("API WAS CALLED");
    //   });
    console.log("UseEffect2");
  },[count2]);
  useLayoutEffect(()=>{
    console.log("UseLayoutEffect1");
  })


  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const increment2 = () => {
    setCount2(count2 + 1);
  };
  const decrement2 = () => {
    setCount2(count2 - 1);
  };

  return (
    <div>
      <h2>Counter (Functional)</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Count2: {count2}</p>
      <button onClick={increment2}>Increment</button>
      <button onClick={decrement2}>Decrement</button>
    </div>
  );
}

// export default CounterFunctional
