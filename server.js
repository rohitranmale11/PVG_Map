const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.get("/", function(req, res) {
    const filepath = path.join(__dirname, "app-files", "index.html");
    res.sendFile(filepath);
})

app.listen(3000);