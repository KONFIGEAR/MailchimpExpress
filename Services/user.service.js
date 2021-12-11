const addUser = (data) => {

    return "add user"
}

const getUser = (id) => {
    return ` get user ${id}`
}


const updateUser = (id, data) => {
    return ` update user ${id}
    Updated data is ${data.name}
    `
}


const deleteUser = (id) => {
    return ` delete user ${id}`
}

module.exports = {
    addUser, getUser, updateUser, deleteUser
}