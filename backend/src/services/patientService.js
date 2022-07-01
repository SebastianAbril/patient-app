const patientRepository = require('../repositories/patientRepository');

const getPatients = () => {
    return patientRepository.getPatients();
};

const getPatientById = (id) => {
    return patientRepository.getPatientById(id);
};

const createPatient = (name, lastname, identification, email) => {
    
};

const updatePatient = (id, name, lastname, identification, email) => {
    
};

const deletePatient = (id) => {
    
};

module.exports = {
    getPatients,
    getPatientById,
    createPatient,
    updatePatient,
    deletePatient
};