
const express = require('express');

const app = express();

// Welcome route
app.get('/', (req, res) => {
    res.send('Welcome to the Book Category API');
});

// Categories route
app.get('/categories', (req, res) => {
    res.json([
        { id: 1, name: 'Fiction' },
        { id: 2, name: 'Non-Fiction' },
        { id: 3, name: 'Biography' }
    ]);
});

// About route
app.get('/about', (req, res) => {
    res.send('Hello! I am an IT student at Ngee Ann Polytechnic. I am learning Back-End Development and building my first API.');
});

// Start server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
