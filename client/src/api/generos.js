import axios from "axios";

export const getGeneros = async () => {
  const response = await axios.get("http://localhost:3000/api/generos");
  return response;
};


