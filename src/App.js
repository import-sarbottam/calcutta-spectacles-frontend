import { Routes, Route } from "react-router-dom";
import Basicinfo from "./components/Basicinfo";
import Frameinfo from "./components/Frameinfo";
import Billentry from "./components/BillEntry";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Billentry />} />
        <Route path="/frame" element={<Frameinfo />} />
        <Route path="/exp" element={<Basicinfo />} />
      </Routes>
    </>
  );
}

export default App;
