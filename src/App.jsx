import Footer from "./components/Footer";
import Header from "./components/Header";
import Entry from "./components/Entry";
import emojipedia from "./data/emojipedia";

function createEmoji(emojipedia) {
  return (
    <Entry
      key={emojipedia.id}
      id={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      description={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      <div>
        <h1>
          <span>emojipedia</span>
        </h1>

        <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
      </div>
      <Footer />
    </div>
  );
}

export default App;
