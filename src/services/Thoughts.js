import http from "../http-common";

class Thoughts {
  getAll() {
    return http.get("/thoughts");
  }
}

export default new Thoughts();
