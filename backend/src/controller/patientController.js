const patientService = require('../services/patientService');

const getPatients = async (request, response) => {
  const patients = await patientService.getPatients();
  response.json(patients);
};

const getPatientById = async (request, response) => {
  const id = parseInt(request.params.id);
  const patient = await patientService.getPatientById(id);
  response.json(patient);
};

const createPatient = async (request, response) => {
  const { name, lastname, identification, email } = request.body;

  await patientService.createPatient(name, lastname, identification, email);
  response.status(201).send();
};

const updatePatient = async (request, response) => {
  const id = parseInt(request.params.id);
  const { name, lastname, identification, email } = request.body;

  await patientService.updatePatient(id, name, lastname, identification, email);
  response.status(200).send();
};

const deletePatient = async (request, response) => {
  const id = parseInt(request.params.id);

  await patientService.deletePatient(id);
  response.status(200).send();
};

module.exports = {
  getPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient
};
