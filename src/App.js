import { Routes, Route } from "react-router-dom";
import Frameinfo from "./components/Frameinfo";
import Billentry from "./components/BillEntry";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Billentry />} />
        <Route path="/frame" element={<Frameinfo />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
