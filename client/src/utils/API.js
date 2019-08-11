import axios from "axios";

export default {


  saveScore: function(devData){
    return axios.put("api/developers/:id", devData)
  },
  
  getDevelopers: function(userData){
    return axios.post("/api/developers/login",  userData);
  },
  saveDevelopers: function(devData) {
    return axios.post("/api/developers/", devData);
  },
  displayDevelopers: function(devData) {
    return axios.get("api/developers/", devData)
  }
};
