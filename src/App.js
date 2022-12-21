import "./App.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LinkContainer from "./LinkContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <LinkContainer />
      </header>
      <Footer />
    </div>
  );
}

export default App;
