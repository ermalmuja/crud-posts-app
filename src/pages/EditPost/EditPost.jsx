import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../api/queries";
import { editPost } from "../../api/mutation";
import "./EditPost.css";

function EditPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { postId } = useParams();

  const addNewPost = async (e) => {
    e.preventDefault();
    await editPost({ title: title, body: body }, postId);
  };
  const getSpecificPost = async () => {
    const specificPost = await getPost(postId);
    setBody(specificPost.body);
    setTitle(specificPost.title);
  };

  useEffect(() => {
    getSpecificPost();
  }, []);
  return (
    <div className="page editPage">
      <h1>{`Edit Post with number: ${postId}`}</h1>
      <form onSubmit={(e) => addNewPost(e)} className="form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="input"
        />
        <button type="submit" className="submitBtn">
          Send
        </button>
      </form>
    </div>
  );
}

export default EditPost;
