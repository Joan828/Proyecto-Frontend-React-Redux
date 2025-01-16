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

  const getByTitle = async (title) => {
    const res = await axios.get(API_URL + "/getPostByTitle/" + title);
    return res.data;
  };

  const like = async (_id) => {
    const token = localStorage.getItem("token");
    const res = await axios.put(API_URL + "/like/"+_id,{}, {
        headers: {
          authorization: token,
        },
      } );
    return res.data;
  };

  const unlike = async (_id) => {
    const token = localStorage.getItem("token");
    const res = await axios.put(API_URL + "/unlike/"+_id,{}, {
        headers: {
          authorization: token,
        },
      } )
    return res.data;
  };

  const addPost = async (post) => {
    const token = localStorage.getItem("token");
    const res = await axios.post(API_URL + "/create", post, {
        headers: {
          authorization: token,
        },
      } )
    return res.data;
  };

const postService = {
  getAll,
  getById,
  getByTitle,
  like,
  unlike,
  addPost
};

export default postService;