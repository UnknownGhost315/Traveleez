const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS and specify the views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Home route (renders index.ejs)
app.get("/", (req, res) => {
    res.render('index3');
});

// Route for index2.ejs (login page)
app.get("/index2", (req, res) => {
    res.render('index2');
});

// Route for index3.ejs
app.get("/index3", (req, res) => {
    res.render('index3');
});

// Simple route for testing
app.get("/hi", (req, res) => {
    res.send("Hello");
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

