import { pool } from "../db.js";

export const getPropuesta = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM detalle_propuesta ORDER BY id_detalles  DESC LIMIT 3;"
    );
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: `${error}`,
    });
  }
};

export const getPropuestaByID = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM detalle_propuesta WHERE id_propuesta = ?",
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

export const postPropuesta = async (req, res) => {
  const {
    destino,
    trasporte,
    precio_adulto,
    precio_niños,
    precio_ancianos,
    inc_desayuno,
    inc_almuerzo,
    inc_cena,
    inc_bebida,
    inc_alcohol,
  } = req.body;

  try {
    const [rows] = await pool.query(
      "INSERT INTO detalle_propuesta (destino ,trasporte, precio_niños, precio_adulto ,precio_ancianos, inc_desayuno, inc_almuerzo, inc_cena, inc_bebida, inc_alcohol) VALUES (?,?,?,?,?,?,?,?,?,?);",
      [
        destino,
        trasporte,
        precio_adulto,
        precio_niños,
        precio_ancianos,
        inc_desayuno,
        inc_almuerzo,
        inc_cena,
        inc_bebida,
        inc_alcohol,
      ]
    );

    res.json({
      id: rows.insertId,
      destino,
      trasporte,
      precio_adulto,
      precio_niños,
      precio_ancianos,
      inc_desayuno,
      inc_almuerzo,
      inc_cena,
      inc_bebida,
      inc_alcohol,
    });
  } catch (error) {
    return res.status(500).json({
      message: `${error}`,
    });
  }
};

export const getRedes = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM inteacciones_redes ;");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: `${error}`,
    });
  }
};
