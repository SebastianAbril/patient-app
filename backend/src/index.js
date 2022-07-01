const express = require('express');
const bodyParser = require('body-parser');
const patientService = require('./services/patientService');
const app = express();
const port = 4320;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);


//GET -> Devuelve una lista de patients
app.get('/api/patient', async (request, response) => {
    const patients = await patientService.getPatients();
    response.json(patients);
});
// GET con id  -> 1 solo reusltado
app.get('/api/patient/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const patient = await patientService.getPatientById(id);
    response.json(patient)
});

app.delete('/api/patient/:id', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.post('/api/patient', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.put('/api/patient/:id', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});



app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});