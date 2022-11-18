import http from "../http-common";

class DataService {
  getPartidos(params) {
    return http.get("partido/", {params})
  }

  getSeleccion() {
    return http.get("seleccion/")
  }
}

export default new DataService();