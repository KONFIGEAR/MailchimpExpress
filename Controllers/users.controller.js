var userService = require("../Services/user.service")

const addUser = (req, res) => {
    return res.send( userService.addUser(req.body))
}

const getUser = (req, res) => {
    return res.send( userService.getUser(req.params.id))
}


const updateUser = (req, res) => {
    return res.send(userService.updateUser(req.params.id, req.body))
}


const deleteUser = () => {
    return ` `
}

module.exports = {
    addUser, getUser, updateUser, deleteUser
}