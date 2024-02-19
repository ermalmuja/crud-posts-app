import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/posts/add">Create New Post</Link>
    </div>
  );
};

export default Navbar;
