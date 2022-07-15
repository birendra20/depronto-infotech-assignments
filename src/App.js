import "./App.css";

import Header from "./components/navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Projects />
    </div>
  );
}

export default App;
