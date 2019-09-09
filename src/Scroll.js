import React from "react";

function Scroll({ children }) {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid transparent",
        height: "480px"
      }}
    >
      {children}
    </div>
  );
}

export default Scroll;
