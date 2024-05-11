import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Landing } from "./components/Views/index";
import Navbar from "./components/NavBar/navbar";

function App() {
  return (
    <div className="App">
    <>
      <Navbar />
      <Routes>
        {/* <Route path={"/"} element={<Landing />} /> */}
        <Route path={"/"} element={<Home />} />
      </Routes>
    </>
    </div>
  );
}

export default App;
