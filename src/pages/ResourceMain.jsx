import React from "react";
import { useNavigate } from "react-router-dom";
import resourceImg from "../images/resources-2.jpg";
import "./Resources.css";
import { Link } from "react-router-dom";

const ResourceMain = () => {
  const navigate = useNavigate();
  return (
    <div className="resources">
      <div className="resource-img">
        <img src={resourceImg} />
      </div>
      <div className="resource-content">
        <h1>Resources</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          adipisci perferendis dicta. Iste ad illum tempora sint? Aperiam,
          perspiciatis dolorem.
        </p>

        <Link to="/resources">
          <button className="resource-btn">See more</button>
        </Link>
      </div>
    </div>
  );
};

export default ResourceMain;
