import classes from './CreateStadium.module.css'
import { BiCalendar, BiCheck, BiX } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';

import React, { useState } from 'react';
import axios from 'axios';

const CreateStadium = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [formData, setFormData] = useState({
        Name:'',
        Row: 0,
        Column:0,
    });

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // console.log('Form submitted:', formData);


    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // Close the popup after form submission
        setPopupVisible(false);
        try {
            const response = await axios.post('your-api-endpoint', formData);

            console.log('Server response:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
    };

    return (
        <div>
            <Button className={classes.popup_button} variant="success"onClick={togglePopup}>Add</Button>

            {isPopupVisible && (
                <div className={classes.popup}>
                    {/* <div className="popup-content"> */}
                    <div className={classes.headers}> <h3>Fill Stadium Details</h3>
                        <button className={classes.close_button} onClick={togglePopup}>
                            <BiX />
                        </button></div>
                        <form onSubmit={handleSubmit} >
                        <div className={classes.form_rows}>
                        <div className={classes.form_columns}>
                            <div className={classes.column1}>
                                <div><label>
                                    Name:
                                    <input
                                        type="text"
                                        name="Name"
                                        value={formData.Name}
                                        onChange={handleChange}
                                    />
                                </label></div>
                                <div> <label>
                                Row:
                                <input
                                    type="number"
                                    name="Row"
                                    min="0"
                                    value={formData.Row}
                                    onChange={handleChange}
                                />
                            </label></div>

                            <div> <label>
                                 Column:
                                <input
                                    type="number"
                                    name="Column"
                                    min="0"
                                    value={formData.Column}
                                    onChange={handleChange}
                                />
                            </label></div>
                           </div>      
                            </div>
                             <Button className={classes.sumbit_button} type="submit" variant="success">Submit</Button>

                            </div>
                        </form>
                    
                </div>
            )}
        </div>
    );
};

export default CreateStadium;

