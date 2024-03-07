import axios from "axios";

export const getClient = async () => {
  const response = await axios.get("http://localhost:3000/api/client");
  return response;
};

export const postClient = async (client) =>
  await axios.post("http://localhost:3000/api/client", client);
