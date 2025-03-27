import axios from "axios";

export class Http {
  static async get(endpoint: string) {
    return axios.get(endpoint);
  }

  static async post(endpoint: string, data: any) {
    return axios.post(endpoint, data);
  }

  static async put(endpoint: string, id: string | number, data: any) {
    return axios.put(endpoint + "/" + id, data);
  }

  static async delete(endpoint: string, id: string | number) {
    return axios.delete(endpoint + "/" + id);
  }
}
