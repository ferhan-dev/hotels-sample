import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

if (typeof window !== "undefined") {
  const token = localStorage.getItem("token");
  if (token) {
    http.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

http.interceptors.response.use(function (response) {
  const authorization = response.headers.authorization;
  if (authorization) {
    localStorage.setItem("token", authorization);
    http.defaults.headers.common.Authorization = `Bearer ${authorization}`;
  }
  return response;
}, function (error) {
  if (error.response) {
    if (error.response.status === 403) {
      delete http.defaults.headers.common.Authorization;
      localStorage.removeItem("token");
      localStorage.removeItem("persist:chalet-root");
      if (window.location.href !== `${window.location.origin}/`) {
        window.location.href = window.location.origin;
      }
    } else {
      const authorization = error.response.headers.authorization;
      if (authorization) {
        localStorage.setItem("token", authorization);
        http.defaults.headers.common.Authorization = `Bearer ${authorization}`;
      }
    }
  }
  return Promise.reject(error);
});
