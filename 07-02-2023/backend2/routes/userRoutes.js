const express = require('express');
const router = express.Router();

const  {userRegistration, userLogin, addSubject, geSubjectDetails}  = require('../controllers/userControllers');

router.post("/registration", userRegistration);
router.post("/login", userLogin);
router.post("/addSubject/:id", addSubject);
router.get("/getSubjects/:id", geSubjectDetails);





module.exports = router ;