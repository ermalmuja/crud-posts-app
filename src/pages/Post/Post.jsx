import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../../api/queries";
import "./Post.css";

function Post() {
  const [post, setPost] = useState();
  const navigate = useNavigate();

  //useParams() eshte funksion i react-router-dom qe mundeson marrjen e id
  //ne url atje nalte varesishte prej emrit qe ja kena
  //la ne App.jsx qesaj path
  const { postId } = useParams();

  const getSpecificPost = async () => {
    const specificPost = await getPost(postId);
    setPost(specificPost);
  };
  useEffect(() => {
    getSpecificPost();
  }, []);
  return (
    <div className="post">
      <p className="postTitle">{post?.title}</p>
      <p className="postDescription">{post?.body}</p>
      <button
        onClick={() => navigate(`/posts/edit/${postId}`)}
        className="postButton"
      >
        Edit This Post
      </button>
    </div>
  );
}

export default Post;
