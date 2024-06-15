import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div id="top">
      {/* Header */}
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      {/* Header */}

      {/* Main */}
      <Main />
      {/* Main */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  );
}

export default App;
