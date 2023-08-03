// CONTROLLER USED TO CONTROLS THE REQUEST AND RESPONSE OF REST API;
// CONTROLLER REQUIRED MODELS TO QUERY DATA TO DB
// CONTROLLER'LL BE USED IN ROUTES

const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();
        
        res.json({
            message: `GET all users success`,
            data: data
        })
    } catch (err) {
        res.status(500).json({
            message: `Server Error`,
            serverMessage: err
        })
    }
};

const createNewUser = async (req, res) => {
    const {body} = req;

    if(!body.email || !body.name || !body.address) {
        return res.status(400).json({
            message: `Data not valid!`,
            data: null,
        })
    }

    try {
        await UsersModel.createNewUser(body);
        res.status(201).json({
            message: `CREATE new user success`,
            data: body,
        })
    } catch(err) {
        res.status(500).json({
            message: `Server Error`,
            serverMessage: err,
        })
    }
};

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await UsersModel.updateUser(body, id)
        res.json({
            message: `UPDATE user success`,
            data: {
                id,
                ...body
            },
        })
    } catch (err) {
        res.status(500).json({
            message: `Server Error`,
            serverMessage: err,
        })
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;

    try{
        await UsersModel.deleteUser(id)
        res.json({
            message: `DELETE user success`
        })
    } catch(err) {
        res.status(500).json({
            message: `Server Error`,
            serverMessage: err,
        })
    }
    
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
};