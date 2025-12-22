import { useLayoutEffect, useEffect } from "react";

function LayoutEffect() {
  useEffect(() => {
    console.log("UseEffect");
  }, []);
  useLayoutEffect(() => {
    console.log("UseLayoutEffect");
  }, []);
  useEffect(() => {
    console.log("UseEffect2");
  }, []);

  return <div>UseLayoutEffect</div>;
}

export default LayoutEffect;
