const mongoose = require('mongoose');
const {userConnection, todoConnection} = require('./connections');

const userSchema = new mongoose.Schema({
    name: String,
    isActive: Boolean,
}, {
    versionKey: false,
    timestamps: true,
});

const todoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
}, {
    versionKey: false,
    timestamps: true,
});

const userModel = userConnection.model('User', userSchema);
const todoModel = todoConnection.model('Todo', todoSchema);

module.exports = {
    userModel,
    todoModel,
};