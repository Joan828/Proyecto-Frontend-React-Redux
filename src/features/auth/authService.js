import axios from "axios";

const API_URL = "http://localhost:8080/users";

const register = async (userData) => {
  const res = await axios.post(API_URL+"/create", userData);
  return res.data;
};

const login = async(userData)=>{
    const res = await axios.post(API_URL + '/login',userData)
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);      
}
    return res.data

}

const logout = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.delete(API_URL + "/logout", {
      headers: {
        authorization: token,
      },
    });
    if (res.data) {
      localStorage.clear();
    }
    return res.data;
  };

  const getInfo = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(API_URL + "/getInfo", {
      headers: {
        authorization: token,
      },
    });
    if(res.data){
      localStorage.setItem("user",JSON.stringify(res.data))
    }

    return res.data;
  };

const authService = {
  register,
  login,
  logout,
  getInfo
};

export default authService;