import http from "../http-common";

class BlogService {
    
    getAll() {
        return http.get("/blog");
      }

    get(id) {
        return http.get(`/blog/${id}`);
      }
    create(data) {
        return http.post("/blog", data);
      }
    
    update(id, data) {
        return http.put(`/blog/${id}`, data);
      }
    
    delete(id) {
        return http.delete(`/blog/${id}`);
      }

    like(id){
      return http.put(`/like/${id}`);
    }

    unlike(id){
      return http.put(`/unlike/${id}`);
    }
}


export default new BlogService();