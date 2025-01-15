import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>left</Button>
       <Button>right</Button>
       <Button>up</Button>
       <Button>down</Button >
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
     {children}
    </button>
  );
}
