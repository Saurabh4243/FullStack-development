const express = require("express");
const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Student Portal");
});

// About route
app.get("/about", (req, res) => {
    res.send("This is an Express app");
});

// Contact route
app.get("/contact", (req, res) => {
    res.send("Name: Saurabh Kothule<br>Email: saurabh@example.com");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});