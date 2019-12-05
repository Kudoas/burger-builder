import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-b6f23.firebaseio.com/"
});

export default instance;
