import { useState } from "react";

function App() {
  let isDone = false;
  function strikeThrough() {
    isDone = true;
  }

  function unStrikeThrough() {
    isDone = false;
  }
  // style={{ textDecoration: "line-through" }}
  // const [isDone, setIsDone] = useState(false);

  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy Milk</p>
      <button onClick={strikeThrough}>Click To Change</button>
      <button onClick={unStrikeThrough}>Click To Change Back</button>
    </div>
  );
}

export default App;
