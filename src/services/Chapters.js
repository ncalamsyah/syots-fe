import http from "../http-common";

class Chapters {
  getAll() {
    return http.get("/chapters");
  }
}

export default new Chapters();
