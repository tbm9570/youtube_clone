import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Feed, Navbar } from "./components";
import ChannelDetails from "./components/ChannelDetails";
import VideoDitails from "./components/VideoDitails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video">
          <Route path=":id" element={<VideoDitails />} />
        </Route>
        <Route path="/channel">
          <Route path=":id" element={<ChannelDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
