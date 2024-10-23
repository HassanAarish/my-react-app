import Form from "./components/Form";
import Login from "./components/Login";

function App() {
  let userIsRegistered = false; // true or false rendering
  return (
    <div className="container">
      {/* {userIsRegistered ? <Login /> : <Form />} */}
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
