import React, { useState } from 'react';
import classes from './Signup.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate();
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
        console.log('Form submitted:', formData);

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        e.preventDefault();
        try {
          const body = {
            userName: formData.username,
            email: formData.email,
            password: formData.password,
          };
          console.log("Before url = ",body)
          
          // Make the API request to the delete endpoint using Axios
          const response1 = await axios.post("http://localhost:8000/api/v1/users/signup", body);
    
          // Check if the request was successful
          console.log(response1.data)
          if (response1.status === 201) {
              console.log('Sign up successfully!');
                  const body = {
                    city: formData.city,
                    address: formData.address,
                    birthDate: formData.birthDate,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    gender: formData.gender,
                  };
                  // Make the API request to the delete endpoint using Axios
                  const response = await axios.post("http://localhost:8000/api/v1/users/update_user", body,{
                    headers: {
                      'Authorization': `Bearer ${response1.data.token}`,
                      'Content-Type': 'application/json' // Adjust content type as needed
                    }
                  });
            
                  // Check if the request was successful
                  if (response.status === 200) {
                    console.log('update successfully!');
                    navigate("/");
                  } else {
                    console.error('Error updating item:', response.status);
                  }
          } else {
            console.error('Error signing up item:', response1.errorMessage);
          }
        } catch (error) {
          console.error('Error: ',error);
        }
      };
    return (
        <div className={classes.signup}>
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
        </div>
    )
}

export default Signup