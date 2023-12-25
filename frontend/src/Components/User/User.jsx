import React from "react";
import { Col } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser, FaTransgender, FaBirthdayCake } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import "./User.css";

export default function User(props) {
  return (
    <div className="delete-user">
      <FaUser className="delete-user-icon" />
      <p className="delete-user-name">{props.user.name}</p>
      <p className="delete-user-username">{props.user.userName}</p>
      <p className="delete-user-location">
        <FaLocationDot />
        {props.user.address}
      </p>
      <p className="delete-user-email">
        <MdOutlineEmail />
        {props.user.email}
      </p>
      <div className="delete-user-info">
        <p>
          <FaTransgender className="delete-user-p-icon" />
          {props.user.gender}
        </p>
        <p>
          <FaBirthdayCake className="delete-user-p-icon" />
          {new Date(props.user.birthDate).getMonth() + 1 < 10 ? '0' : ''}{new Date(props.user.birthDate).getMonth() + 1}/{new Date(props.user.birthDate).getMonth() < 10 ? '0' : ''}{new Date(props.user.birthDate).getDate()}/{new Date(props.user.birthDate).getFullYear()}
        </p>
      </div>
    </div>
  );
}
