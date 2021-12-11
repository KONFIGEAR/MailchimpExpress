const express = require('express');
const router = express.Router();
const userController = require("../Controllers/users.controller")
router.post('', userController.addUser)
router.get('/:id', userController.getUser)
router.put('/:id', userController.updateUser)


module.exports = router