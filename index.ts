const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "hey there"
    })
})

app.listen(3000);