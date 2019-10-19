import axios from "axios";

export default {
  // Gets all books
  signIn: function(userData) {
    return axios.post("/api/user/signIn", userData);
  },
  // Gets the book with the given id
  signUp: function(userData) {
    return axios.post("/api/user/signUp", userData);
  },
 
};