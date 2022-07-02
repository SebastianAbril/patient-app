const express = require('express');
const bodyParser = require('body-parser');
const patientController = require('./controller/patientController');
const app = express();
const port = 4320;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);

app.get('/api/patient', patientController.getPatients);
app.get('/api/patient/:id', patientController.getPatientById);
app.post('/api/patient', patientController.createPatient);
app.put('/api/patient/:id', patientController.updatePatient);
app.delete('/api/patient/:id', patientController.deletePatient);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});