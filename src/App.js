import "./App.css";
import Blog from "./components/Blogs/Blog";

import Header from "./components/navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Projects />
      <Blog />
    </div>
  );
}

export default App;
