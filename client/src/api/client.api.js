import axios from "axios";

export const getClient = async () => {
  const response = await axios.get("http://localhost:3000/api/client");
  return response;
};

export const postClient = async (client) =>
  await axios.post("http://localhost:3000/api/client", client);

export const deleteClient = async (id) =>
  await axios.delete(`http://localhost:3000/api/client/${id}`);

export const getClientId = async (id) =>
  await axios.get(`http://localhost:3000/api/client/${id}`);

export const updateClient = async (id, newValue) =>
  await axios.patch(`http://localhost:3000/api/client/${id}`, newValue);
