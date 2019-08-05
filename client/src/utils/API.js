import axios from "axios";

export default {
  // Gets all books
  getTests: function() {
    return axios.get("/api/test");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  getDevelopers: function(){
    return axios.get("/api/developer");
  },
  saveDevlopers: function(devData) {
    return axios.post("/api/developer", devData);
  },
  saveRecruiters: function(recruitData){
    return axios.post("/api/recruiters", recruitData);
  }
};
