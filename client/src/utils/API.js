import axios from "axios";

export default {
  
  
  getDevelopers: function(userData){
    return axios.post("/api/developers/login", userData);
  },
  saveDevelopers: function(devData) {
    return axios.post("/api/developers/signup", devData);
  }
};
