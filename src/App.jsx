import Footer from "./components/Footer";
import Header from "./components/Header";
import Entry from "./components/Entry";
import emojipedia from "./data/emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log("🚀 ~ Emoji Data:", emojipedia);
console.log("🚀 ~ Emoji result:", newEmojipedia);

function App() {
  return (
    <div>
      <Header />
      <div>
        <h1>
          <span>emojipedia</span>
        </h1>

        <dl className="dictionary">
          {emojipedia.map((emojipedia) => (
            <Entry
              key={emojipedia.id}
              id={emojipedia.id}
              emoji={emojipedia.emoji}
              name={emojipedia.name}
              description={emojipedia.meaning}
            />
          ))}
        </dl>
      </div>
      <Footer />
    </div>
  );
}

export default App;
