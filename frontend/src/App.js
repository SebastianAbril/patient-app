import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css';
import { MainTable } from './components/MainTable';

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
        <MainTable />
        {patients &&
          patients.map((patient) => {
            return <p key={patient.id}>{JSON.stringify(patient)}</p>;
          })}
      </header>
      <BasicButtons />
    </div>
  );
}

function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
export default App;
