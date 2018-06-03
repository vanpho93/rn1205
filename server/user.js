const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://admin:khoapham123@ds147030.mlab.com:47030/user1205')
.then(() => console.log('Database connected'))
.catch(error => console.log('Cannot connect database', error));

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, trim: true, unique: true },
    name: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    avatar: { type: String, required: true, default: faker.internet.avatar }
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
