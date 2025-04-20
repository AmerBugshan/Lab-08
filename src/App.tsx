import "./styles.css";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes } from "react-router";

export default function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
    </div>
  );
}
