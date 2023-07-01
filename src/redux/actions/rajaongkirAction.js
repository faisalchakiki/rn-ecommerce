import axios from "axios"
import { API_AUTH_RAJAONGKIR,API_RAJAONGKIR} from "../../utils/constant"

const api = axios.create({
  baseURL: API_RAJAONGKIR,
});

export const fetchApiProvince = async () => {
  try {
    const response = await api.get('province', API_AUTH_RAJAONGKIR);
    return response.data.rajaongkir.results;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchApiCities = async (idProvinsi) => {
  try {
    const response = await api.get(`city?province=${idProvinsi}`, API_AUTH_RAJAONGKIR);
    return response.data.rajaongkir.results;
  } catch (error) {
    throw new Error(error.message);
  }
};



