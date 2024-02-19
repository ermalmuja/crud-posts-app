import React, { useEffect, useState } from "react";
import WorkCard from "../../components/molecules/WorkCard/WorkCard";
import { getPosts } from "../../api/queries";
import "./Posts.css";
import { useNavigate } from "react-router-dom";

function Posts() {
  //e kem kriju nje state qe i run postet masi te merren prej backendit
  //posts eshte gjendja e state-it
  //setPosts eshte funksioni qe thirret per me i ba update apo me i ndryshu gjendjen e posts
  const [posts, setPosts] = useState([]);

  //useNavigate() eshte nje funskion nga libraria react-router-dom qe mundeson me navigu naper pages qe i kem deklaru ne App.jsx
  const navigate = useNavigate();

  const getAllPosts = async () => {
    //qitu i kem marr krejt postet edhe i kem rujt ne nje konstante te quajtur allPosts
    const allPosts = await getPosts();

    //tash qat konstante e kem ba set tek state posts permes setPosts
    setPosts(allPosts);
  };

  // //useEffecti eshte perdorur ne menyre qe te ekzkutohet funskioni getAllPosts()
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div className="works container">
      <p className="WorksTitle">Posts</p>
      <button className="homeButton" onClick={() => navigate("/posts/add")}>
        Create New Post
      </button>
      <div className="worksItems">
        {posts.map((post) => {
          return (
            <WorkCard
              id={post.id}
              key={post.id}
              title={post.title}
              description={post.body}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
