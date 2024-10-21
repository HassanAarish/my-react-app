import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import Card from "./components/Props";

function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <Card
        name="Horror"
        img="https://picsum.photos/200"
        email="horror_98@icloud.com"
        tel="+92 302 0217897"
      />
      <Card
        name="Token"
        img="https://picsum.photos/200"
        email="aarishhassan98@gmail.com"
        tel="+92 333 0382582"
      />
      <Footer />
    </div>
  );
}

export default App;
