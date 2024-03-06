import { pool } from "../db.js";

export const getClients = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM clientes");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: `${error}`,
    });
  }
};

export const getClientsByID = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM clientes WHERE id_cliente = ?",
      [req.params.id]
    );

    rows.length <= 0
      ? res.status(404).json({
          message: " cliente no existe",
        })
      : res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: `${error}`,
    });
  }
};

export const postClient = async (req, res) => {
  const {
    nombre,
    apellido,
    direccion,
    documento_identidad,
    tipo_cliente,
    contacto,
    email,
  } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO clientes( nombre, apellido, direccion, documento_identidad, tipo_cliente, contacto, email ) VALUES (?, ?, ?, ?, ?, ?, ?);",
      [
        nombre,
        apellido,
        direccion,
        documento_identidad,
        tipo_cliente,
        contacto,
        email,
      ]
    );
    res.json({
      id: rows.insertId,
      nombre,
      apellido,
      direccion,
      documento_identidad,
      tipo_cliente,
      contacto,
      email,
    });
  } catch (error) {
    return res.status(500).json({
      message: `${error}`,
    });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "DELETE FROM clientes WHERE id_cliente = ? ;",
      [req.params.id]
    );

    console.log(rows);
    rows.affectedRows === 0
      ? res.status(404).json({
          message: "cliente no existe",
        })
      : res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: `${error}`,
    });
  }
};

export const updateClient = async (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    apellido,
    direccion,
    documento_identidad,
    tipo_cliente,
    contacto,
    email,
  } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE clientes SET nombre = IFNULL(?, nombre), apellido = IFNULL(?, apellido), direccion =IFNULL(?,direccion), documento_identidad = IFNULL(?, documento_identidad), tipo_cliente =IFNULL(?, tipo_cliente), contacto = IFNULL(?, contacto), email =IFNULL(?, email) WHERE id_cliente = ?",
      [
        nombre,
        apellido,
        direccion,
        documento_identidad,
        tipo_cliente,
        contacto,
        email,
        id,
      ]
    );

    const [rows] = await pool.query(
      "SELECT * FROM clientes WHERE id_cliente = ?",
      [id]
    );

    result.affectedRows === 0
      ? res.status(404).json({
          message: "cliente no existe ",
        })
      : res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: `${error}`,
    });
  }
};
