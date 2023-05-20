import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/routes/Home";
import Contact from "./components/routes/Contact";
import Projects from "./components/routes/Projects";
import Extra from "./components/routes/Extra";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/extra" element={<Extra />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
