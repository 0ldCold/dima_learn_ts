import axios from "axios";

export const baseUrl = process.env.BASE_URL ?? "http://localhost";
const nasaApiKey = process.env.NASA_API_KEY;

export const instance = axios.create({ baseURL: baseUrl });

instance.interceptors.request.use((config) => {
  const previousParams = config.params;
  config.params = { ...previousParams, api_key: nasaApiKey };

  return config;
});
