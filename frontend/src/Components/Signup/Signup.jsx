import React, { useState } from 'react';
import classes from './Signup.module.css';
import axios from 'axios';
const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        gender: '',
        city: '',
        address: '',
        email: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        e.preventDefault();

        try {
            const response = await axios.post('your-api-endpoint', formData);

            console.log('Server response:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
    };
    return (
        <div className={classes.form_container}>

            <form onSubmit={handleSubmit}>
                <h2>Create Account</h2>
                <div className={classes.signinlink}>
                    <span>Already have one?</span>
                    <a href="/Signin">Signin</a>
                </div>
                <div className={classes.form_group}
                ><input
                        type="text"
                        name="firstName"
                        placeholder=' First Name'
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    /></div>
                <br />
                <div className={classes.form_group}> <input
                    type="text"
                    name="lastName"
                    placeholder='Last Name'
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                /></div>
                <br />

                <div className={classes.form_group}> <input
                    type="date"
                    name="birthDate"
                    placeholder=' Birth Date'
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    required
                /></div>
                <br />

                <div className={classes.form_group}>
                    <select
                        name="gender"
                        placeholder=' Gender'
                        value={formData.gender}
                        onChange={handleInputChange}
                        required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select></div>
                <br />

                <div className={classes.form_group}><input
                    type="text"
                    name="city"
                    placeholder='City'
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                /></div>
                <br />

                <div className={classes.form_group}> <input
                    type="text"
                    name="address"
                    placeholder='Address'
                    value={formData.address}
                    onChange={handleInputChange}
                /></div>
                <br />

                <div className={classes.form_group}> <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                /></div>
                <br />
                <div className={classes.form_group}><input
                    type="text"
                    name="username"
                    placeholder='Username'
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                /></div>
                <br />

                <div className={classes.form_group}> <input
                    type="password"
                    name="password"
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                /></div>
                <br />

                <button type="submit">Create account</button>
            </form>
        </div>
    )
}

export default Signup