import axios from "axios";

export const postPropuesta = async (propuesta) =>
  await axios.post("http://localhost:3000/api/analisis", propuesta);

export const getPropuesta = async () => {
  const response = await axios.get("http://localhost:3000/api/analisis");
  return response;
};

export const getRedes = async () => {
  const response = await axios.get("http://localhost:3000/api/red");
  return response;
};

export const getPublicacion = async () => {
  const response = await axios.get("http://localhost:3000/api/publicacion");
  return response;
};

export const postPublicacion = async (publicacion) =>
  await axios.post("http://localhost:3000/api/publicacion", publicacion);
