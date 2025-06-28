import axios from "axios";
import { BaseUrl } from "./env/environment";
import { useNavigate } from "react-router-dom";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] = `Bearer ${
  localStorage.getItem("User_Token") ? localStorage.getItem("User_Token") : ""
}`;


export class Http {
  constructor() {}
  Medium: string = "";
  get(endpoint: string, Odata: boolean) {
    if (Odata) {
      this.Medium = "/odata/";
    } else {
      this.Medium = "/api/";
    }
    return axios.get(BaseUrl + this.Medium + endpoint);
  }

  post(endpoint: string, Odata: boolean, data: any) {
    if (Odata) {
      this.Medium = "/odata/";
    } else {
      this.Medium = "/api/";
    }
    return axios.post(BaseUrl + this.Medium + endpoint, data);
  }

  delete(endpoint: string, Odata: boolean, id: number) {
    if (Odata) {
      this.Medium = "/odata/";
    } else {
      this.Medium = "/api/";
    }
    return axios.delete(BaseUrl + this.Medium + endpoint + "/" + id);
  }
  update(endpoint: string, Odata: boolean, id: string | number, data: any) {
    if (Odata) {
      this.Medium = "/odata/";
    } else {
      this.Medium = "/api/";
    }
    return axios.put(BaseUrl + this.Medium + endpoint + "/" + id, data);
  }

  Logout() {
    const navigate = useNavigate();
    localStorage.clear();
    navigate("/");
  }

IsAuthenticate(): boolean {
  const token = localStorage.getItem("User_Token");
  return !!token;
}
}
