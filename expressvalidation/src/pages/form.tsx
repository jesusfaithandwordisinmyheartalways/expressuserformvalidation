


import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/form/form.css'
import ExpressImage from '../images/expressjsbanner.png'

const Form: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [userErrorMessage, setUserErrorMessage] = useState('');
    const [userSuccessMessage, setUserSuccessMessage] = useState('');
    const navigate = useNavigate();

    const userLoginData = { username, password, confirmPassword, email };

    const userSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setUserErrorMessage('');
        setUserSuccessMessage('');

        try {
            const response = await fetch('http://localhost:3008/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userLoginData),
            });

            const results = await response.json();
            if (response.status === 200) {
                setUserSuccessMessage(results.data);
                navigate('/submit');
            } else {
                setUserErrorMessage(results.data); // Show error message
            }
        } catch (error) {
            console.error('Data error occurred:', error);
        }
    };

    return (
        <>

        

            <div className="header-text"><div><h3>User SignUp Nodejs/Express js Form</h3></div></div>
            <div className={'form-container'}>
                <form onSubmit={userSubmit} className="user-form" name="userForm">
                    <div>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            name="username"
                            placeholder="Username"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="confirm-password">Confirm Password</label>
                    </div>
                    <div>
                        <input
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type="password"
                            name="confirm-password"
                            placeholder="Confirm Password"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>

            {/* Display error messages */}
            <div className="error-message-container">
                <div className="error-message-wrapper">
                    {userErrorMessage && (
                        <p style={{ color: 'red', transition: '3s linear' }}>{userErrorMessage}</p>
                    )}
                </div>
            </div>

            {/* Display success message */}
            <div className="success-data-container">
                <div className="success-data-wrapper">
                    {userSuccessMessage && (
                        <p style={{ color: 'green' }}>{userSuccessMessage}</p>
                    )}
                </div>
            </div>
        </>
    );
};


    export default Form