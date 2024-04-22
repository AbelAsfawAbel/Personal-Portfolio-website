import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Sociallinks from "./Components/Sociallinks";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Exprianc from "./Components/Exprianc";
import Contact from "./Components/Contact";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Exprianc />
        <Contact />
        <Sociallinks />
      </div>
    </>
  );
}

export default App;
