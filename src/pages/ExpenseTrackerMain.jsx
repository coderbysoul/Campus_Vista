import React from "react";
import "./ExpenseTracker.css";
import expenseImg from "../images/expense.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import VoiceNavigationApp from "../components/VoiceNavigation";

const ExpenseTrackerMain = () => {
  const navigate = useNavigate();
  return (
    <div className="expenses">
      <div className="expense-content">
        <h1>Track Your Expenses</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          adipisci perferendis dicta. Iste ad illum tempora sint? Aperiam,
          perspiciatis dolorem.
        </p>
        <Link to="/expense">
          <button className="expense-btn">Track</button>
        </Link>
      </div>
      <div className="expense-img">
        {" "}
        <img src={expenseImg} />{" "}
      </div>
    </div>
  );
};

export default ExpenseTrackerMain;
