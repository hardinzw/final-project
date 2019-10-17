import axios from "axios";



export default {
  // Gets all books
  signIn: function(userData) {
    return axios.get("/api/userRoute/signIn", userData);
  },
  // Gets the book with the given id
  signUp: function(userData) {
    return axios.post("/api/userRoute/signUp", userData);
  },
 
};