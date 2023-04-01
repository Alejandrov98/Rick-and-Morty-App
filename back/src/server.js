const express = require('express');
const app = express();
const router = require('./routes');
const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/rickandmorty', router);

app.listen(3001, () => {
    console.log('Server raised in port ') 
});


