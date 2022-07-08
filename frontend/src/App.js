import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const loadPatients = async () => {
      const patientes = await fetch('/api/patient').then((response) => response.json());

      setPatients(patientes);
    };

    loadPatients();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {patients &&
          patients.map((patient) => {
            return <p key={patient.id}>{JSON.stringify(patient)}</p>;
          })}
      </header>
    </div>
  );
}

export default App;
