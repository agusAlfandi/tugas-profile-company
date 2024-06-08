import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/App.css";

function App() {
  return (
    <div id="top">
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <Main />
    </div>
  );
}

export default App;
