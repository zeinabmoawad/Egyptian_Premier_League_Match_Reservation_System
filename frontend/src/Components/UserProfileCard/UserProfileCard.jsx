import React from "react";
import "./UserProfileCard.css";
import profile_icon from "../Assets/user.png";

const UserProfileCard = () => {
  return (
    <div className="upc">
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="" />
        <div className="profile-title">Menatalh</div>
        <div className="profile-button">menatalh@gmail.com</div>
      </div>
    </div>
  );
};

export default UserProfileCard;
