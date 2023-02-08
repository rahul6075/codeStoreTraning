const express = require("express");
const router = express.Router();
const {userRegistration, userLogin, getUserDetails, addSubject} = require('../contollers/userController')


router.post('/registration',  userRegistration)
router.post('/login',  userLogin);
router.get('/getUser/:id',  getUserDetails);
router.post('/addSubject/:id',  addSubject);

module.exports = router;