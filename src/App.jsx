import Heading from "./components/Heading";
import List from "./components/List";
import { Add, Sub, Multi, Divide } from "../src/components/Calculator";

function App() {
  return (
    <div className="App">
      <Heading />
      <List />
      <ul>
        <li>{Add(1, 2)}</li>
        <li>{Multi(2, 3)}</li>
        <li>{Sub(7, 2)}</li>
        <li>{Divide(5, 2)}</li>
      </ul>
    </div>
  );
}

export default App;
