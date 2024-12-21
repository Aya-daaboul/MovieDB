const express = require('express');

const app = express();
const port = 3000;

app.get('*', (req, res) => {
    console.log('Request received',req.url);
    res.send('ok');
});

app.listen(port, () => {
    console.log(`Server is listening on port`+port);
});