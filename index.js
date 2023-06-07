const express = require('express');
const cors = require('cors');
const http = require('https');

const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.get('*', (req, res) => {
    console.log(req.url);
    try {
        http.get({
            hostname: "api.github.com",
            path: req.url,
            headers: {
                Authorization: process.env.GH_TOKEN,
                "user-agent": "lol",
            }
        }, (j) => {
            j.pipe(res);
        });
    } catch (e) {
        console.log(e);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})