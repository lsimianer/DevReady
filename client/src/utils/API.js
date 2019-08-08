import axios from "axios";

export default {
  
  
  getDevelopers: function(userData){
    return axios.post("/api/developers/login", userData);
  },
  saveDevelopers: function(devData) {
    return axios.post("/api/developers/signup", devData);
  },
  displayDevelopers: function(devData) {
    return axios.get("api/developers/viewDevs")
  }
};
