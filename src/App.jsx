import Login from "./components/Login";

function App() {
  let isLoggedin = false;
  const currentTime = new Date().getHours();
  console.log("🚀 ~ currentTime:", currentTime);
  return (
    <div className="container">
      {/* Ternary Operator */}
      {isLoggedin ? <h1>Hello</h1> : <Login />}
      {/* AND Operator */}
      {/* {currentTime > 12 && <h1>Why are you still working?</h1>} */}
    </div>
  );
}

export default App;
