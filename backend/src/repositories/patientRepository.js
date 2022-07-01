const { pool } = require('./postgres');
const { Patient } = require('../model/Patient');

const getPatients = async () => {
    const sql = `
    select 
        id, 
        name, 
        last_name, 
        identification, 
        email 
    from patient 
    order by id
    `;

    const result = await pool.query(sql);

    return result.rows.map((row) => new Patient(
        row.id,
        row.name,
        row.last_name,
        row.identification,
        row.email
    ));
};


const getPatientById = async (id) => {
    const sql = `
    select 
        id, 
        name, 
        last_name, 
        identification, 
        email 
    from patient 
    where id = $1
    `;
    const result = await pool.query(sql, [id]);

    return result.rows.map((row) => new Patient(
        row.id,
        row.name,
        row.last_name,
        row.identification,
        row.email
    ))[0];
}; 

const createPatient = (patient) => {
    
};

const updatePatient = (patient) => {
    
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