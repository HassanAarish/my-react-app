import { useState } from "react";

function App() {
  setInterval(handleTime, 1000);

  let currentTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(currentTime);

  function handleTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={handleTime}>Get Time</button>
    </div>
  );
}

export default App;
