


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post('/submit', (req, res) => {
    const { username, password, confirmPassword, email } = req.body;

    // Username validation
    if (!usernameRegex.test(username)) {
        return res.status(400).json({ data: 'Invalid username. Must be 3-20 characters long, containing only letters, numbers, and underscores.' });
    }

    // Password validation
    if (!passwordRegex.test(password)) {
        return res.status(400).json({ data: 'Invalid password. Must be at least 8 characters long and contain at least one letter and one number.' });
    }

    // Email validation
    if (!emailRegex.test(email)) {
        return res.status(400).json({ data: 'Invalid email address.' });
    }

    // Confirm password validation
    if (confirmPassword !== password) {
        return res.status(400).json({ data: 'Passwords do not match.' });
    }

    res.status(200).json({ data: 'Form has been accepted!' });
});

const PORT_NUMBER = 3008;
app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port: ${PORT_NUMBER}`);
});