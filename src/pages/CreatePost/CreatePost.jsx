import React, { useState } from "react";
import { createPost } from "../../api/mutation";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const createNewPost = async (e) => {
    e.preventDefault();
    await createPost({
      title: title,
      body: body,
      userId: 1,
    });
  };
  return (
    <div className="page editPage">
      <h1>Add new post</h1>
      <form onSubmit={(e) => createNewPost(e)} className="form">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value, "vlera")}
          className="input"
        />
        <input
          type="text"
          placeholder="Body"
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

export default CreatePost;
