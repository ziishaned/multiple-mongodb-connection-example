const express = require('express');
const {userModel, todoModel} = require('./models');
const app = express();

app.get('/users', async (req, res) => {
    const users = await userModel.find({});

    res.json(users);
});

app.get('/todos', async (req, res) => {
    const todos = await todoModel.find({});

    res.json(todos);
});

const port = 3000;
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));