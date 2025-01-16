import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { like, unlike } from "../../features/posts/postSlice";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import "./Post.scss";

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userPosts, setUserPosts] = useState(user?.postIds);

  const userPostsWithLikes = () => {
    const postsUserLogged = posts.filter((post) =>
      user?.postIds?.includes(post._id)
    )
    setUserPosts(postsUserLogged)
  }

  useEffect(() => {
    userPostsWithLikes()
  }, [like, unlike, posts]);

  if (isLoading) {
    return <p>Esperando a las publicaciones...</p>;
  }

  const postsToPrint =
    window.location.pathname == "/profile" ? userPosts : posts;

  const post = postsToPrint.map((post) => {
    const isAlreadyLiked = post.likes?.includes(user?._id);

    return (
      <div key={post._id}>
        <Link to={"/postDetail/" + post._id}>{post.title}</Link>
        <p>
          Me gustas: {post.likes?.length}
          {user ? (
            <>
              {isAlreadyLiked ? (
                <HeartFilled
                  className="cora"
                  onClick={() => dispatch(unlike(post._id))}
                />
              ) : (
                <HeartOutlined onClick={() => dispatch(like(post._id))} />
              )}
            </>
          ) : (
            <HeartOutlined onClick={() => navigate("/login")} />
          )}
        </p>
      </div>
    );
  });
  return <div>Publicaciones: {post}</div>;
};

export default Post;
