import axios from "axios";

export default {
  
  
  getDevelopers: function(){
    return axios.get("/api/developers");
  },
  saveDevelopers: function(devData) {
    return axios.post("/api/developers", devData);
  }
};
