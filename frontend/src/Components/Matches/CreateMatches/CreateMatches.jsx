import classes from './CreateMatches.module.css'
import { BiCalendar, BiCheck, BiX } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';

import React, { useState } from 'react';
import axios from 'axios';

const CreateMatches = (props) => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [formData, setFormData] = useState({
        homeTeam: '',
        awayTeam: '',
        matchVenue: '',
        time:'',
        mainReferee: '',
        linesman1: '',
        linesman2: '',
        role:localStorage.getItem("userType")
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
            const storedToken = localStorage.getItem('token');
            const response = await axios.post('http://localhost:8000/api/v1/match', formData,{
                headers: {
                  'Authorization': `Bearer ${storedToken}`,
                  'Content-Type': 'application/json' // Adjust content type as needed
                }
              });
              props.change(response.data);
            console.log('Server response:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
    };

    return (
        <div>
            {/* <button className={classes.popup_button} onClick={togglePopup}>Add</button> */}
            <Button className={classes.popup_button} variant="success"onClick={togglePopup}>Add</Button>

            {isPopupVisible && (
                <div className={classes.popup}>
                    {/* <div className="popup-content"> */}
                    <div className={classes.headers}> <h3>Fill Matche Details</h3>
                        <button className={classes.close_button} onClick={togglePopup}>
                            <BiX />
                        </button></div>
                        <form onSubmit={handleSubmit} >
                        <div className={classes.form_rows}>
                        <div className={classes.form_columns}>
                            <div className={classes.column1}>
                                <div><label>
                                    Home Team:
                                    <input
                                        type="text"
                                        name="homeTeam"
                                        value={formData.homeTeam}
                                        onChange={handleChange}
                                    />
                                </label></div>
                                <div> <label>
                                Away Team:
                                <input
                                    type="text"
                                    name="awayTeam"
                                    value={formData.awayTeam}
                                    onChange={handleChange}
                                />
                            </label></div>

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
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                />
                            </label></div></div>
                            <div className={classes.column2}>
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

export default CreateMatches;

