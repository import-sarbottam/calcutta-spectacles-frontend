import { Routes, Route } from "react-router-dom";
import Frameinfo from "./components/Frameinfo";
import Billentry from "./components/BillEntry";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Billentry />} />
        <Route path="/frame" element={<Frameinfo />} />
      </Routes>
    </>
  );
}

export default App;
