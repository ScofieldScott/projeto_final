const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const usersRouter = require('./Routes/usersRouts');
const app = express();

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
const dataObj = JSON.parse(data);

app.use((req, res, next) => {
    req.requesteTime = new Date().toISOString();
    next();
});

//ROUTE HANDLERS
app.use('/api/v1/users', usersRouter);

//START SERVER
module.exports = app;