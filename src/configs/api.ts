import axios from "axios";

import ENV from "./env";

const host = axios.create({
  baseURL: ENV.host,
});

const api = {
  getData: () => host.get("users"),
};

export default api;
