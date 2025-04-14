import axios from "axios";
import { BaseUrl } from "./env/environment";

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

  delete(endpoint: string, Odata: boolean, id: string | number) {
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
}
