import axios from "axios";

export const api_repos = axios.create({
  baseURL: "https://api.github.com/repos",
});

export const api_users = axios.create({
  baseURL: "https://api.github.com/users",
});
