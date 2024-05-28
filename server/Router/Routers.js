const express = require('express')
const router = express.Router();
const controllers = require('../Controllors/controllers')
const verifyToken = require('../Controllors/auth')

router.post('/login', controllers.Login)
router.post('/register', controllers.Resgiter)
router.get('/usersData',  controllers.usersData)
router.get('/profil',verifyToken, controllers.Profil)
// Backend route for updating user info
router.put('/edit-profile', verifyToken, controllers.editProfile);


module.exports =  router 