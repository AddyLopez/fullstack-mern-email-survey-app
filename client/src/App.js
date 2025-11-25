import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Troggy</h2>
      </header>
      <a href="/auth/google">Sign in with Google</a>
    </div>
  );
}

export default App;
