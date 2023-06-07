const express = require('express');
const http = require('https');
const app = express();
const port = process.env.PORT || 8000;

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