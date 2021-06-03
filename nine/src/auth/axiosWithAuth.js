import axios from "axios";

// this creates once instance of an axios call that can be used throughout
// your code
export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://top9-the2nd.herokuapp.com/api/movies",
    headers: {
      Authorization: token,
    },
  });
};
