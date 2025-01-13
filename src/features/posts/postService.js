import axios from "axios";

const API_URL = "http://localhost:8080/posts";

const getAll = async () => {
  const res = await axios.get(API_URL + "/getAllPosts");
  return res.data;
};

const getById = async (_id) => {
    const res = await axios.get(API_URL + "/getPostById/" + _id);
    return res.data;
  };  

const postService = {
  getAll,
  getById
};

export default postService;