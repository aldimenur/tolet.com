import React from "react";
import "./Card.css";

const IsiCard = () => {
  return (
    <div className="card-container">
      <div className="card-list">
        <div className="card-home" id="1">
          <img
            src="https://images.unsplash.com/photo-1652336662850-93e09b4e7708?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
            className="hover:object-none object-cover rounded-lg h-full"
            alt="card"
          ></img>
        </div>
        <div className="card-home" id="2">
          <img
            src="https://images.unsplash.com/photo-1652228055576-cf34d52fd299?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="img1"
            className="hover:object-none object-cover rounded-lg h-full"
          />
        </div>
        <div className="card-home" id="3">
          <img
            src="https://images.unsplash.com/photo-1652194177618-01a9a437e049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1394&q=80"
            alt="img1"
            className="hover:object-none object-cover rounded-lg h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default IsiCard;
