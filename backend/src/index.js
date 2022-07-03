require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const patientController = require('./controller/patientController');

const app = express();
const port = 4320;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);


// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'))
});
app.get('/api/patient', patientController.getPatients);
app.get('/api/patient/:id', patientController.getPatientById);
app.post('/api/patient', patientController.createPatient);
app.put('/api/patient/:id', patientController.updatePatient);
app.delete('/api/patient/:id', patientController.deletePatient);




app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});