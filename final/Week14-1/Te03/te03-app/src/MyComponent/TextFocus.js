import React, { useState, useEffect, useRef } from "react";

const TextFocus = () => {
  /** Field */
  const [name, setName] = useState("");
  const focus_target = useRef(null);
  /** Function */
  const handleLogin = () => {
    setName("");
  }
  useEffect(() => { focus_target.current.focus(); });
  /** Return */
  return (
    <div>
      <input type="text" value={name} onChange={(element) => setName(element.target.value)} ref={focus_target}></input>
      <input type="button" value={"Login"} onClick={handleLogin}></input>
    </div>
  );
}

export default TextFocus;