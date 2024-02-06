import React from "react";
import { Link } from "react-router-dom";
import scholarshipImg from "../images/scholarship.jpg";
const ScholarshipMain = () => {
  return (
    <div className="scholarships">
      <div className="scholarship-content">
        <h1>Scholarships</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          adipisci perferendis dicta. Iste ad illum tempora sint? Aperiam,
          perspiciatis dolorem.
        </p>
        <Link to="/scholarships">
          <button className="scholarship-btn">See more</button>
        </Link>
      </div>
      <div className="scholarship-img">
        <img src={scholarshipImg} />
      </div>
    </div>
  );
};

export default ScholarshipMain;
