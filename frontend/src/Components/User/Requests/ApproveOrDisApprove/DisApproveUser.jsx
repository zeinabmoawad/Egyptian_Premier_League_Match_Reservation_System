import React, { useState } from 'react';
import axios from 'axios';
import { BiX   } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';

import classes from "./ApproveUser.module.css"
const DisApproveUser = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const showPopup = () => setPopupVisible(true);
    const hidePopup = () => setPopupVisible(false);
  
    const handleApprove = async () => {
        try {
          // Make the API request to the delete endpoint using Axios
          const response = await axios.delete("");
    
          // Check if the request was successful
          if (response.status === 200) {
            console.log('Item deleted successfully!');
          } else {
            console.error('Error deleting item:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error.message);
        }
    
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

