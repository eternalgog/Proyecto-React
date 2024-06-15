import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './database.js'; // Asegúrate de usar la extensión .js y el nombre correcto

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Ruta para insertar un nuevo psicólogo
app.post('/api/psicologos', (req, res) => {
  const { nombre, enfoque, telefono, correo, rfc } = req.body;
  const query = `INSERT INTO psicologos (nombre, enfoque, telefono, correo, rfc) VALUES (?, ?, ?, ?, ?)`;
  db.run(query, [nombre, enfoque, telefono, correo, rfc], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID });
  });
});

// Ruta para obtener todos los psicólogos
app.get('/api/psicologos', (req, res) => {
  const query = `SELECT * FROM psicologos`;
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Ruta para eliminar un psicólogo por ID
app.delete('/api/psicologos/:id', (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM psicologos WHERE id = ?`;
  db.run(query, [id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(204).end();
  });
});

// Ruta para actualizar un psicólogo por ID
app.put('/api/psicologos/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, enfoque, telefono, correo, rfc } = req.body;
  const query = `UPDATE psicologos SET nombre = ?, enfoque = ?, telefono = ?, correo = ?, rfc = ? WHERE id = ?`;
  db.run(query, [nombre, enfoque, telefono, correo, rfc, id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ updatedID: id });
  });
});

// Ruta para insertar un nuevo paciente
app.post('/api/pacientes', (req, res) => {
  const { nombre, telefono, direccion, email, edad, genero, nss } = req.body;
  const query = `INSERT INTO pacientes (nombre, telefono, direccion, email, edad, genero, nss) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.run(query, [nombre, telefono, direccion, email, edad, genero, nss], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID });
  });
});

// Ruta para obtener todos los pacientes
app.get('/api/pacientes', (req, res) => {
  const query = `SELECT * FROM pacientes`;
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Ruta para eliminar un paciente por ID
app.delete('/api/pacientes/:id', (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM pacientes WHERE id = ?`;
  db.run(query, [id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(204).end();
  });
});

// Ruta para actualizar un paciente por ID
app.put('/api/pacientes/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, telefono, direccion, email, edad, genero, nss } = req.body;
  const query = `UPDATE pacientes SET nombre = ?, telefono = ?, direccion = ?, email = ?, edad = ?, genero = ?, nss = ? WHERE id = ?`;
  db.run(query, [nombre, telefono, direccion, email, edad, genero, nss, id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ updatedID: id });
  });
});

// server.js (fragmento)

// Ruta para insertar una nueva cita
// server.js

app.post('/api/citas', (req, res) => {
  const { paciente, fecha, hora, doctor, motivo } = req.body;
  
  const query = `INSERT INTO citas (paciente, fecha, hora, doctor, motivo) VALUES (?, ?, ?, ?, ?)`;
  db.run(query, [paciente, fecha, hora, doctor, motivo], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID });
  });
});
// server.js

// Ruta para obtener todas las citas
app.get('/api/citas', (req, res) => {
  const query = `SELECT * FROM citas`; // Asegúrate que 'citas' sea el nombre correcto de tu tabla en la base de datos
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// server.js

// Ruta para actualizar una cita por ID
app.put('/api/citas/:id', (req, res) => {
  const { id } = req.params;
  const { paciente, fecha, hora, doctor, motivo } = req.body;
  
  const query = `UPDATE citas SET paciente = ?, fecha = ?, hora = ?, doctor = ?, motivo = ? WHERE id = ?`;
  db.run(query, [paciente, fecha, hora, doctor, motivo, id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ updatedID: id });
  });
});
// server.js

// Ruta para eliminar una cita por ID
app.delete('/api/citas/:id', (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM citas WHERE id = ?`;
  db.run(query, [id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(204).end();
  });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});