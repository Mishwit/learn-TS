import "./App.css";
import { CardSection } from "./components/molecules/CardSection";

const users = [
  {
    name: "Jane",
    age: 28,
    city: "London",
  },
  {
    name: "Nick",
    age: 15,
    city: "Southampton",
  },
  {
    name: "Erin",
    age: 23,
    city: "Glazgow",
  },
];

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <CardSection />
      </main>
    </div>
  );
}

export default App;
