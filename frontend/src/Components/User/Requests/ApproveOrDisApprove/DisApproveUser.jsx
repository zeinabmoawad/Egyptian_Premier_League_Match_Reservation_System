import React, { useState } from 'react';
import axios from 'axios';
import { BiX   } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';

import classes from "./ApproveUser.module.css"
const DisApproveUser = (props) => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const showPopup = () => setPopupVisible(true);
    const hidePopup = () => setPopupVisible(false);
  
    const handleApprove = async () => {
      try {
        // Make the API request to the delete endpoint using Axios
        console.log(props.id);
        const body={
          userId: props.id,
        } 
        const storedToken = localStorage.getItem('token');
        const response = await axios.post("http://localhost:8000/api/v1/users/disapprove_user", body, {
          headers: {
            'Authorization': `Bearer ${storedToken}`,
            'Content-Type': 'application/json' // Adjust content type as needed
          }
        });
  
        // Check if the request was successful
        if (response.status === 200) {
          console.log('Item Approved successfully!');
        } else {
          console.error('Error approving item:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
        props.onDisapprove();
        hidePopup();
      };
    return (
        <div>
        <button className={classes.popup_button} onClick={showPopup}><BiX color='red'/></button>
        {isPopupVisible && (
          <div className={classes.popup}>
            <p className={classes.deleteText}>Are you sure you want to DisApprove user?</p>
            <div className={classes.buttons}>
            <Button className={classes.cancel_button} onClick={handleApprove} variant="success">DisApprove</Button>
            <Button className={classes.delete_button} onClick={hidePopup} variant="danger">cancel</Button>
              
            </div>
           
          </div>
        )}
      </div>
    );
};

export default DisApproveUser;

