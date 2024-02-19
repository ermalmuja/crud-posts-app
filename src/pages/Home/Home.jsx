import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home container">
      <h1 className="homeText">Welcome</h1>
      <button className="homeButton" onClick={() => navigate("/posts")}>
        Posts
      </button>
    </div>
  );
}

export default Home;
