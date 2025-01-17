import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { like, unlike } from "../../features/posts/postSlice";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import "./Post.scss";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userPosts, setUserPosts] = useState(user?.postIds);

  const userPostsWithLikes = () => {
    const postsUserLogged = posts.filter((post) =>
      user?.postIds?.includes(post._id)
    );
    setUserPosts(postsUserLogged);
  };

  useEffect(() => {
    userPostsWithLikes();
  }, [like, unlike, posts]);

  if (isLoading) {
    return <p>Esperando a las publicaciones...</p>;
  }

  const postsToPrint =
    window.location.pathname == "/profile" ? userPosts : posts;

  const post = postsToPrint.map((post) => {
    const isAlreadyLiked = post.likes?.includes(user?._id);

    return (
      <Card
        key={post._id}
        hoverable
        style={{
          width: 418,
        }}
        cover={
        <Link to={"/postDetail/" + post._id}>
            <img
            alt="img coche"
            src="https://imgs.search.brave.com/GJciMSDNeVCvVj5g-aP_GkW0VNr89qaAFcgxZrzMeKk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/ZGlzcGFyby12ZXJ0/aWNhbC1wYWlzYWpl/LXZlcmRlLXF1ZS1y/ZWZsZWphLWxhZ28t/cGVyZGlkby13aGlz/dGxlci1iYy1jYW5h/ZGFfMTgxNjI0LTQ0/ODU1LmpwZz9zZW10/PWFpc19oeWJyaWQ"
          />
        </Link>
        }
      >
        <Link to={"/postDetail/"+post._id}>        
            <Meta title={post.title} />
        </Link>
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
      </Card>
    );
  });
  return <div>Publicaciones: {post}</div>;
};

export default Post;
