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

  return result.rows.map(
    (row) => new Patient(row.id, row.name, row.last_name, row.identification, row.email)
  );
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

  return result.rows.map(
    (row) => new Patient(row.id, row.name, row.last_name, row.identification, row.email)
  )[0];
};

const createPatient = async (patient) => {
  const sql = `
    insert into patient (name, last_name, identification, email)
    values ($1, $2, $3, $4)
    `;

  await pool.query(sql, [patient.name, patient.lastname, patient.identification, patient.email]);
};

const updatePatient = async (patient) => {
  const sql = `
    update patient
    set
        name = $1, 
        last_name = $2, 
        identification = $3, 
        email = $4
    where id = $5
    `;

  await pool.query(sql, [
    patient.name,
    patient.lastname,
    patient.identification,
    patient.email,
    patient.id
  ]);
};

const deletePatient = async (id) => {
  const sql = `
    delete from patient
    where id = $1
    `;

  await pool.query(sql, [id]);
};

module.exports = {
  getPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient
};
