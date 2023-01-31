import Basicinfo from "./components/Basicinfo";
function App() {
  return (
    <div style={container}>
      <Basicinfo/>
    </div>
  );
}

const container = {
  backgroundColor: 'grey',
  display:'flex',
  // alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  width: '100%',
}

export default App;
