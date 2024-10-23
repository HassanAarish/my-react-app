import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import notes from "./data/notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((notes) => (
        <Note
          key={notes.key}
          id={notes.key}
          title={notes.title}
          content={notes.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
