import "./App.css"
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
        <div className="fade" style={{top: '-6%', right:'0'}}></div>
        <div className="fade" style={{top: '34%', left: '-6rem'}}></div>
        <Home/>
    </div>
  );
}

export default App;
