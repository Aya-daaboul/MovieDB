const express = require('express');

const app = express();
const port = 3000;

// app.get('*', (req, res) => {
//     console.log('Request received',req.url);
//     res.send('ok');
// });

app.get('/test', (req, res) => {
    res.json({
        status: 200,
        message: 'ok'
    });
});

app.get('/time', (req, res) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    formattedTime=hours+':'+minutes+':'+seconds;
    res.json({
        status: 200,
        message: formattedTime
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port`+port);
});