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

app.get('/hello/ID', (req, res) => {
    const id = req.params.ID;
    if(id){
        res.json({
            status: 200,
            message: 'Hello, '+id
        });
    }else{
        res.json({
            status: 200,
            message: 'Hello'
        });
    }
});

app.get('/search', (req, res) => {
    const search = req.query.s;
    if (search) { // If 's' query is provided
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: search
        });
    } else { // If 's' query is not provided
        res.status(500).json({
            status: 500,
            error: true,
            message: 'You have to provide a search'
        });
    }
});
app.listen(port, () => {
    console.log(`Server is listening on port`+port);
});