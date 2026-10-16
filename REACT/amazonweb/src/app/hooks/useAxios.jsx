import axios from "axios";

const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000",
  });

  return axiosInstance;
};

export default useAxios;
