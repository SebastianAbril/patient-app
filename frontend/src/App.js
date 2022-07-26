import './App.css';
import { PatientsScreen } from './screens/PatientsScreen';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';
import { NewPatientScreen } from './screens/NewPatientScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/newPatient" element={<NewPatientScreen />} />
        <Route path="/patientsScreen" element={<PatientsScreen />} />
      </Routes>
    </div>
  );
}

export default App;
