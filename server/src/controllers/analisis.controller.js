import { pool } from "../db.js";

export const getPropuesta = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM propuestas ORDER BY id_propuesta  DESC LIMIT 3;"
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
      "SELECT * FROM propuestas WHERE id_propuesta = ?",
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
  const { fecha_creacion, destino, nombre } = req.body;

  try {
    const [rows] = await pool.query(
      "INSERT INTO propuestas (fecha_creacion,destino ,nombre) VALUES (? , ? , ?);",
      [fecha_creacion, destino, nombre]
    );

    res.json({
      id: rows.insertId,
      fecha_creacion,
      destino,
      nombre,
    });
  } catch (error) {
    return res.status(500).json({
      message: `${error}`,
    });
  }
};

export const postPublicacion = async (req, res) => {
  const { id_propuesta, id_red, tipo, metrica } = req.body;

  try {
    const [rows] = await pool.query(
      "INSERT INTO publicaciones (id_propuesta, id_red ,tipo, metrica ) VALUES (? , ? , ?,?);",
      [id_propuesta, id_red, tipo, metrica]
    );

    res.json({
      id: rows.insertId,
      id_propuesta,
      id_red,
      tipo,
      metrica,
    });
  } catch (error) {
    return res.status(500).json({
      message: `${error}`,
    });
  }
};

export const getPublicacion = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT a.*,b.nombre FROM publicaciones a INNER join propuestas b on a.id_propuesta=b.id_propuesta ORDER BY id_publicacion  DESC  LIMIT 3;"
    );
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: `${error}`,
    });
  }
};

export const getRedes = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM inteacciones_redes;");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: `${error}`,
    });
  }
};
