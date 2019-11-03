import React, { useState } from "react";

function App() {
  const [text, setText] = useState("World");
  return <div className="hello">Hello {text}</div>;
}

export default App;
