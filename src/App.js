import Basicinfo from "./components/Basicinfo";
function App() {
  return (
    <div style={container}>
      <Basicinfo />
    </div>
  );
}

const container = {
  backgroundColor: "grey",
  margin: "0",
  padding: "0",
  boxSizing: "border-box",
  minHeight: "100vh",
  width: "100%",
  fontFamily: "sans-serif",
};

export default App;
