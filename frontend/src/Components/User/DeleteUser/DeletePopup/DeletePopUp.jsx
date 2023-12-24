import React, { useState } from 'react';
import axios from 'axios';
import { BiTrash  } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';

import classes from "./DeletePopup.module.css"
const DeletePopUp = (props) => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const showPopup = () => setPopupVisible(true);
    const hidePopup = () => setPopupVisible(false);
  
    const handleDelete = async () => {
        try {
          const body = {
              userId: props.userId,
          };
          // Make the API request to the delete endpoint using Axios
          const response = await axios.post("http://localhost:8000/api/v1/users/delete_user", body);
    
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
        <button className={classes.popup_button} onClick={showPopup}><BiTrash></BiTrash></button>
  
        {isPopupVisible && (
          <div className={classes.popup}>
            <p className={classes.deleteText}>Are you sure you want to delete?</p>
            <div className={classes.buttons}>
            <Button className={classes.cancel_button} onClick={hidePopup} variant="success">Cancel</Button>
            <Button className={classes.delete_button} onClick={handleDelete}variant="danger">Delete</Button>

            </div>
           
          </div>
        )}
      </div>
    );
};

export default DeletePopUp;

