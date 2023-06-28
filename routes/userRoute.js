const express = require('express');

const userControler = require('./../controlers/userControler');
const router = express.Router();


app
    .route('/')
    .get(userControler.getAllUsers)
    .post(userControler.createUser);

app
    .route('/:id')
    .get(userControler.getUser)
    .patch(userControler.updateUser)
    .delete(userControler.deleteUser);
    
module.exports = router;