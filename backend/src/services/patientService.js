const patientRepository = require('../repository/patientRepository');
const {Patient} = require('../model/Patient');

const getPatients = () => {
    return patientRepository.getPatients();
};

const getPatientById = (id) => {
    return patientRepository.getPatientById(id);
};

const createPatient = async (name, lastname, identification, email) => {
    const patient = new Patient(null, name, lastname, identification, email); //null es el id que genera la base de datos
    await patientRepository.createPatient(patient); 
};

const updatePatient = async (id, name, lastname, identification, email) => {
    const actualPatient = await getPatientById(id);

    actualPatient.name = name;
    actualPatient.lastname = lastname;
    actualPatient.identification = identification;
    actualPatient.email = email;
    
    await patientRepository.updatePatient(actualPatient); 
};

const deletePatient = async (id) => {
    await patientRepository.deletePatient(id);
};

module.exports = {
    getPatients,
    getPatientById,
    createPatient,
    updatePatient,
    deletePatient
};