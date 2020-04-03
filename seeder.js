const faker = require('faker');

const {userModel, todoModel} = require('./models');
const {userConnection, todoConnection} = require('./connections');

async function seed() {
    for (let i = 0; i< 10; i++) {
        await userModel.create({
            name: faker.name.findName(),
            isActive: faker.random.boolean(),
        });
    }

    for (let i = 0; i < 10; i++) {
        await todoModel.create({
            title: faker.lorem.words(3),
            completed: faker.random.boolean(),
        });
    }
}

seed().then(() => {
    userConnection.close();
    todoConnection.close();
});