import React, { Component } from "react";
import ClassComponent from "./components/ClassComponents";
import FunctionalComponent from "./components/FunctionalComponents";

// Class
// class App extends Component {
//   render() {
//     return <h1>Hello</h1>;
//   }
// }
// export default App;

// class App extends Component {
//   render() {
//     return <ClassComponent />;
//   }
// }
// export default App;

// class App extends React.Component {
//   render() {
//     return <ClassComponent />;
//   }
// }
// export default App;

// Hook
// function App() {
//   return <h1>Hello</h1>;
// }
// export default App;

function App() {
  return <FunctionalComponent />;
}
export default App;
