import classes from './EditMatches.module.css'
import { BiCalendar, BiCheck, BiX } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';

import React, { useState } from 'react';
import axios from 'axios';
import { BiPencil } from 'react-icons/bi';
const EditMatches = (props) => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [formData, setFormData] = useState({
        matchVenue: undefined,
        time: undefined,
        mainReferee: undefined,
        linesman1: undefined,
        linesman2: undefined,
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
            const id = props.matchId
            console.log(`http://localhost:8000/api/v1/match/update_match/${id}`)
            const response = await axios.post(`http://localhost:8000/api/v1/match/update_match/${id}`, formData);
            props.change(response.data);
            console.log('Server response:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div >
            <button className={classes.popup_button} onClick={togglePopup}>   <BiPencil size={30} /></button>
            {isPopupVisible && (
                <div className={classes.popup}>
                    <div className={classes.headers}> <h3>Fill Matche Details</h3>
                        <button className={classes.close_button} onClick={togglePopup}>
                            <BiX />
                        </button></div>
                        <form onSubmit={handleSubmit} >
                        <div className={classes.form_rows}>
                        <div className={classes.form_columns}>
                            <div className={classes.column1}>
            
                            <div> <label>
                                Match Venue:
                                <input
                                    type="text"
                                    name="matchVenue"
                                    value={formData.matchVenue}
                                    onChange={handleChange}
                                />
                            </label></div>
                            <div><label>
                                Date & Time:
                                <input
                                    type="datetime-local"
                                    name="dateTime"
                                    value={formData.dateTime}
                                    onChange={handleChange}
                                />
                            </label></div>
                            <div> <label>
                                    Main Referee:
                                    <input
                                        type="text"
                                        name="mainReferee"
                                        value={formData.mainReferee}
                                        onChange={handleChange}
                                    />
                                </label></div>
                                
                            <div><label>
                                Linesman 1:
                                <input
                                    type="text"
                                    name="linesman1"
                                    value={formData.linesman1}
                                    onChange={handleChange}
                                />
                            </label></div>

                            <div> <label>
                                Linesman 2:
                                <input
                                    type="text"
                                    name="linesman2"
                                    value={formData.linesman2}
                                    onChange={handleChange}
                                />
                            </label></div>
                            </div>
                            
                            </div>
                             {/* <button className={classes.sumbit_button} type="submit">Submit</button> */}
                             <Button className={classes.sumbit_button} type="submit" variant="success">Submit</Button>

                            </div>
                        </form>
                    
                </div>
            )}
        </div>
    );
};

export default EditMatches;

