import axios from 'axios';

// Remplace par l'URL de ton backend Laravel (ex: http://localhost:8000/api ou https://ton-site.com/api)
const API_BASE_URL = 'http://localhost:8000/api';

export const getHoraires = async () => {
  const res = await axios.get(`${API_BASE_URL}/horaires`);
  return res.data;
};

export const registerPelerin = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/pelerins`, data);
  return res.data;
};