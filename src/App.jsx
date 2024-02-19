import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Post/Post";
import Home from "./pages/Home/Home";
import CreatePost from "./pages/CreatePost/CreatePost";
import EditPost from "./pages/EditPost/EditPost";
import Layout from "./Layouts/Layout";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" index element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<Post />} />
          <Route path="/posts/add" element={<CreatePost />} />
          <Route path="/posts/edit/:postId" element={<EditPost />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
