import axios from "axios";

export const api_users = axios.create({
  baseURL: "https://api.github.com/users",
});
