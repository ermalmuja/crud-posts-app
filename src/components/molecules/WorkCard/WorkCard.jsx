import "./WorkCard.css";
import { useNavigate } from "react-router-dom";

function WorkCard({ title, description, id }) {
  const navigate = useNavigate();
  const handleDeleteThisPost = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result, "qitu");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="workCard">
      <div className="workCardContent" onClick={() => navigate(`${id}`)}>
        <div className="workCardInfo">
          <h3 className="workCardInfoTitle">{title}</h3>
          <p className="workCardInfoDescription">{description}</p>
        </div>
      </div>
      <button onClick={handleDeleteThisPost} className="workCardButton">
        Delete this post
      </button>
    </div>
  );
}

export default WorkCard;
