import axios from "axios";

const BASE_URL = "https://664a381ea300e8795d4159b8.mockapi.io";
const API_ENDPOINT = "/campers";

export const fetchCampers = async ({ page, limit }) => {
  const { data } = await axios(
    `${BASE_URL}${API_ENDPOINT}?page=${page}&limit=${limit}`
  );

  return data;
};
