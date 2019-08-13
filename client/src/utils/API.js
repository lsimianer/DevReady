import axios from "axios";

export default {


  saveScore: function(score, type){
    return axios.put("api/developers/score", {score, type})
  },
  
  getDeveloper: function(id){
    return axios.get("api/developers/:id" + id)
  },

  getDeveloperMe: function(){
    return axios.get("api/developers/me")
  },

  getDeveloperLogin: function(userData){
    return axios.post("/api/developers/login",  userData);
  },
  saveDevelopers: function(devData) {
    return axios.post("/api/developers/", devData);
  },
  displayDevelopers: function(devData) {
    return axios.get("api/developers/", devData)
  }
};
