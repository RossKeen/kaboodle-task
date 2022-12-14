import "./App.css";
import Header from "./components/Header";
import Accommodations from "./components/Accommodations";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <main className="Main">
        <Accommodations />
      </main>
      <footer>Placeholder footer</footer>
    </div>
  );
}

export default App;
