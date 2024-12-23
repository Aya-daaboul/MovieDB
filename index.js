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
    finalTime=hours+':'+minutes+':'+seconds;
    res.json({
        status: 200,
        message: finalTime
    });
});

//step 4
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
//step 4
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
//crud read section
app.get('/movies/read', (req, res) => {
    res.json({
        status: 200,
        data: movies
    });

});
//search section
app.get('/movies/read/by-date', (req, res) => {
    res.json({
        status: 200,
        data: movies.sort((a, b) => a.year - b.year)
    });

});

app.get('/movies/read/by-rating', (req, res) => {
    res.json({
        status: 200,
        data: movies.sort((a, b) => b.rating - a.rating) 
    });

});

app.get('/movies/read/by-title', (req, res) => {
    res.json({
        status: 200,
        data: movies.sort((a, b) => a.title.localeCompare(b.title))
    });

});
//step 7
res.get('/movies/read/id/:id', (req, res) => {
    id=req.params.id;
    if(id){
        res.json({
            status: 200,
            data: movies[id]
        });
    }
    else{
        res.json({
        status: 404,
        error: true,
        message: 'the movie '+id+' does not exist'
        });
    }
});

//create section step 8
app.post('/movies/add', (req, res) => {
    const title = req.body.title;
    const year = req.body.year;
    const rating = req.body.rating;
    const newmovie={title: title, year: year, rating: rating};
    if( isNaN(year) || year.length != 4 || !year){
        res.json({
            status: 403,
            error: true,
            message: 'you cannot create a movie without providing a correct year'
        });
    }
    else if(!title){
        res.json({
        status: 403,
        error: true,
        message: 'No title provided'
    });
    }
    else if(rating<0||rating>10||!rating){
        movies.push(newmovie);
        res.json({
        status: 200,
        rating:4,
        data:movies
    });
    } 
    else {
        movies.push(newmovie);
        res.json({
            status: 200,
            data: movies
        });
    }
});

app.put('/movies/update', (req, res) => {

});

// app.delete('/movies/delete', (req, res) => {
//     id=req.params.id;
//     if(!id){
//         res.json{
//             status:404,
//             error:true,
//             message:'please provide an id'
//         }
//     }
//     else{

//         movies.push();
//     }
// });

app.listen(port, () => {
    console.log(`Server is listening on port`+port);
});