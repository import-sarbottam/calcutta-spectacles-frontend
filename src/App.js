import { Routes, Route } from "react-router-dom";
import Basicinfo from "./components/Basicinfo";
import Frameinfo from "./components/Frameinfo";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Basicinfo/>} />
          <Route path="/frame" element={<Frameinfo/>} />
      </Routes>
    </>
    // // <div style={container}>
    // //   <Basicinfo />
    // // </div>
    // <Frameinfo />
  );
}

// const container = {
//   backgroundColor: "grey",
//   display: "flex",
//   minHeight: "100vh",
//   width: "100%",
//   fontFamily: "sans-serif",
// };

export default App;
