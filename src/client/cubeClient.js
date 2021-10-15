import cubejs from "@cubejs-client/core";

const API_URL = "https://cube-ae.overlayanalytics.com/cubejs-api/v1";
const cubejsAPI = cubejs(process.env.API_TOKEN, { apiUrl: API_URL });

export const getData = async (query) => {
  const result = await cubejsAPI.load(query);
  return result?.loadResponse?.results[0];
};
