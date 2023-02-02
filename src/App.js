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
  display: 'flex',
  minHeight: "100vh",
  width: "100%",
  fontFamily: "sans-serif",
};

export default App;
