const express = require("express");
const fs = require("fs");
const PORT = 8000;
const url = `http://localhost:${PORT}`; // Use http instead of https for localhost

const app = express();

app.get('/api/', (req, res) => {
    fs.readFile("data.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("Error reading file");
            return;
        }
        res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`The server started at: ${url}`);
});
