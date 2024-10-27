// Step 1
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cores = require('cors');

// const product = require('./routers/product');
// const auth = require('./routers/auth');

const {readdirSync} = require('fs');


/// Step 4 middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cores());


// app.use('/api', product);
// app.use('/api', auth);
readdirSync('./routers').map((items)=>app.use('/api', require(`./routers/${items}`)));


// Step 2
app.listen(5000, () => {
    console.log('Server is Running on port 5000');
})