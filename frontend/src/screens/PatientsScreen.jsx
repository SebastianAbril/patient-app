import { MainTable } from '../components/MainTable';
import { useEffect, useState } from 'react';

export const PatientsScreen = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const loadPatients = async () => {
      const patientes = await fetch('/api/patient').then((response) => response.json());

      setPatients(patientes);
    };

    loadPatients();
  }, []);

  return (
    <div>
      <MainTable data={patients} />
    </div>
  );
};
