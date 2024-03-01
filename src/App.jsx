import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Feed, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </>
  );
}

export default App;
