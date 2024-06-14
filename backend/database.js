import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./psicovida.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS pacientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    telefono TEXT NOT NULL,
    direccion TEXT NOT NULL,
    email TEXT NOT NULL,
    edad INTEGER NOT NULL,
    genero TEXT NOT NULL,
    nss TEXT NOT NULL
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS psicologos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    enfoque TEXT NOT NULL,
    telefono TEXT NOT NULL,
    correo TEXT NOT NULL,
    rfc TEXT NOT NULL
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS citas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    paciente TEXT NOT NULL,
    fecha TEXT NOT NULL,
    hora TEXT NOT NULL,
    doctor TEXT NOT NULL,
    motivo TEXT NOT NULL
  )`);
  
});

export default db;
