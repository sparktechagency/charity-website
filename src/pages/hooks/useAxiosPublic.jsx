import axios from "axios";

// const backendUrl = `http://localhost:3000/api/v1`;
// local url 
// const backendUrl = `http://137.59.180.219:8000/api`;

// live url live url 
const backendUrl = `https://api.virtuehope.com/api`;

const axiosPublic = axios.create({
  baseURL: backendUrl,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
