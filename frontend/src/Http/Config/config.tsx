import axios from "axios";
import { BaseUrl } from "../env/environment";

axios.defaults.baseURL = BaseUrl;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] = `Bearer ${
  localStorage.getItem("UserToken") ? localStorage.getItem("UserToken") : ""
}`;
