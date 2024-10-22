import Avatar from "./components/Avatar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Props";
import contacts from "./data/data";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card-div">
        <Avatar img={"https://picsum.photos/200"} />
        <Card
          name={contacts[0].name}
          img={contacts[0].imgURL}
          phone={contacts[0].phone}
          email={contacts[0].email}
          relationship={contacts[0].relationship}
        />
        <Card
          name={contacts[1].name}
          img={contacts[1].imgURL}
          phone={contacts[1].phone}
          email={contacts[1].email}
          relationship={contacts[1].relationship}
        />
        <Card
          name={contacts[2].name}
          img={contacts[2].imgURL}
          phone={contacts[2].phone}
          email={contacts[2].email}
          relationship={contacts[2].relationship}
        />
        <Card
          name={contacts[3].name}
          img={contacts[3].imgURL}
          phone={contacts[3].phone}
          email={contacts[3].email}
          relationship={contacts[3].relationship}
        />
        <Card
          name={contacts[4].name}
          img={contacts[4].imgURL}
          phone={contacts[4].phone}
          email={contacts[4].email}
          relationship={contacts[4].relationship}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
