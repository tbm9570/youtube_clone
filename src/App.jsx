import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Feed, Navbar } from "./components";
import ChannelDetails from "./components/ChannelDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/channel">
          <Route path=":id" element={<ChannelDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
