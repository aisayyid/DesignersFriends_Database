import axios from "axios";

export default {


getPictures: function() {
    return axios.get("/file");
  },

  createPicture: function(data, headers) {
    return axios.post("/uploadFile", data, headers);
  },

//   saveImage: function(data) {
//     return axios.post("/dashboard", data);
//   }
}