import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/";

export default function axiosInstance({ accessKey }) {
  if (accessKey === false) {
    return axios.create({
      baseURL: baseURL,
      timeout: 10000,
      headers: {
        Authorization: accessKey ? "JWT " + accessKey : null,
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
  } else {
    return axios.create({
      baseURL: baseURL,
      timeout: 10000,
      headers: {
        Authorization: accessKey ? "JWT " + accessKey : null,
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
  }
}
