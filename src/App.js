import logo from './logo.svg';
import './App.css';
import { Todos } from './Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Todos App
        </p>
      </header>
      <main className="App-main">
        <Todos/>
      </main>
    </div>
  );
}

export default App;
