import axios from "axios";
const apiPORT = import.meta.env.VITE_API_PORT;

const API_BASE_URL = `http://localhost:${apiPORT}/api`;

export const getCountries = async () => {
  const response = await axios.get(`${API_BASE_URL}/countries`);
  return response.data;
};

export const getCountryInfo = async (code: string) => {
  const response = await axios.get(`${API_BASE_URL}/country/${code}`);
  return response.data;
};
