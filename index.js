const express = require('express');

const app = express();
const port = 3000;

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]
// CRUD create read update delete -> POST GET PUT DELETE
//testing get can be through the browser (localhost:3000) (nodemon is an alternative)

app.get('/', (req, res) => { // the slash / vs star * 
// after slash no characters  after star any characters
    console.log('Request received',req.url);
    res.send('ok');
});

app.get('/test', (req, res) => {
    res.json({
        status: 200,
        message: 'ok'
    });
    //res.json return the object but res.send returns the string
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
    } else { 
        res.status(500).json({
            status: 500,
            error: true,
            message: 'You have to provide a search'
        });
    }
});

app.post('/movies/create', (req, res) => {
    const movie=req.body;
    movies.push(movie);
    res.json({
        status: 200,
        message: 'Movie has been added',
        data: movie
    });


});

app.get('/movies/read', (req, res) => {
    res.json({
        status: 200,
        data: movies
    });

});

app.put('/movies/update', (req, res) => {
    
});

app.delete('/movies/delete', (req, res) => {
});

app.listen(port, () => {
    console.log(`Server is listening on port`+port);
});