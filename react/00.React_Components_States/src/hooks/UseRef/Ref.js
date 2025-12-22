import { useRef } from "react";

function Ref() {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log("inpurRef :", inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <>
      <h1>UseRef</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </>
  );
}

export default Ref;
