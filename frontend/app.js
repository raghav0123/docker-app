const express = require("express");

const app = express();

app.get("/", async (req, res) => {
    const response = await fetch("http://backend:5000/data");
    const data = await response.json();

    res.json(data);
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Express server running on port 3000");
});