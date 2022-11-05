import http from "../http-common";

class Users {
  getAll() {
    return http.get("/users");
  }
}

export default new Users();
