import { pool } from "../db.js";

export const getGeneros = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT generos.genero AS genero, generos.id_genero AS id_genero , tipos_clientes.tipo AS tipo, tipos_clientes.id_tipo FROM generos JOIN tipos_clientes ON generos.id_genero = tipos_clientes.id_tipo;"
      
    );

    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: `${error}`,
    });
  }
};
