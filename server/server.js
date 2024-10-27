// Step 1
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


/// Step 4 middleware
app.use(morgan('dev'));
app.use(bodyParser.json());


// Step 3 Route
app.get('/', (req, res) => {
    console.log('Hello Adisak');
    res.send('Hello Adisak');
})

app.post('/api', (req, res) => {
    //code
    const {name, price} = req.body;
 

    console.log(price);
    res.send(req.body);
})



// Step 2
app.listen(5000, () => {
    console.log('Server is Running on port 5000');
})