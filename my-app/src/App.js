import logo from './logo.svg';
import './App.css';

import PracticeFunc from './PracticeFunc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '20px'
      }}>
        <PracticeFunc />
      </section>
    </div>
  );
}

export default App;
