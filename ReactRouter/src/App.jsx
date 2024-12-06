import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Red from "./Components/Red";
import Yellow from "./Components/Yellow";
import Green from "./Components/Green";
import Blue from "./Components/Blue";

function App() {
  return (
    <>
      <div className="nav">
        <Link to="/" className="home">
          Home
        </Link>
        <Link to="/redPicker" className="redPicker">
          {"  "}
        </Link>
        <Link to="/yellowPicker" className="yellowPicker"></Link>
        <Link to="/greenPicker" className="greenPicker"></Link>
        <Link to="/bluePicker" className="bluePicker"></Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redPicker" element={<Red />} />
        <Route path="/yellowPicker" element={<Yellow />} />
        <Route path="/greenPicker" element={<Green />} />
        <Route path="/bluePicker" element={<Blue />} />
      </Routes>
    </>
  );
}

export default App;
