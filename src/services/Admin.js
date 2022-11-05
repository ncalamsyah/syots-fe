import http from "../http-common";

class Admin {
  getAll() {
    return http.get("/admins");
  }
}

export default new Admin();
