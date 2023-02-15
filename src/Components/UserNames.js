import React from "react";
import "./Index.css";
const UserNames = ({ UserData }) => {
  return (
    <div>
      <h2>Names</h2>
      {UserData.map((element, index) => {
        return (
          <div key={index} className="userName">
            <p>{element.first_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserNames;
