import React from "react";
import { Col } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser, FaTransgender, FaBirthdayCake } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function User(props) {
  return (
    <div>
      <Col md={3}>
        <div className="delete-user">
          <FaUser className="delete-user-icon" />
          <p className="delete-user-name">{props.user.name}</p>
          <p className="delete-user-username">{props.user.username}</p>
          <p className="delete-user-location">
            <FaLocationDot />
            {props.user.location}
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
              {props.user.birthdate}
            </p>
          </div>
        </div>
      </Col>
    </div>
  );
}
