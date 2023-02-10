const express = require('express');
const router = express.Router()
const { userRegister, userLogin, userLogout,getNewAcessToken, addPost } = require('../controllers/userController');

const {authMiddleWare} = require('../services/authServices')


router.post('/register', userRegister)
router.post('/login', userLogin)
router.post('/getNewToken', getNewAcessToken)
router.get('/getPost', authMiddleWare, addPost)

router.delete('/logout', userLogout)



module.exports = router;