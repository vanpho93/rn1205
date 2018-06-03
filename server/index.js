const express = require('express');
const { json } = require('body-parser');
const { hash, compare } = require('bcrypt');
const { signPromise, verifyPromise } = require('./jwt');
const { User } = require('./user');
const app = express();
app.use(json());

app.get('/user', (req, res) => {
    User.find({})
    .then(users => res.send(users));
});

app.post('/user/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const encrypted = await hash(password, 8);
        const user = new User({ name, email, password: encrypted });
        await user.save();   
        res.send({ success: true, user }) 
    } catch (error) {
        res.status(400).send({ success: false, message: 'INVALID_USER_INFO' });
    }
});

app.post('/user/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) throw new Error('INVALID_USER_INFO');
        const same = await compare(password, user.password);
        if (!same) throw new Error('INVALID_USER_INFO');
        const token = await signPromise({ _id: user._id });
        const userInfo = user.toObject();
        userInfo.token = token;
        userInfo.password = undefined;
        res.send({ success: true, user: userInfo }); 
    } catch (error) {
        res.status(400).send({ success: false, message: 'INVALID_USER_INFO' });
    }
});

app.post('/user/check', async (req, res) => {
    try {
        const { token } = req.body;
        const { _id } = await verifyPromise(token);
        const user = await User.findById(_id);
        if (!user) {
            return res.status(400).send({ success: false, message: 'INVALID_USER_INFO' });
        };
        const userInfo = user.toObject();
        const newToken = await signPromise({ _id: user._id });
        userInfo.token = newToken;
        userInfo.password = undefined;
        res.send({ success: true, user: userInfo }); 
    } catch (error) {
        return res.status(400).send({ success: false, message: 'INVALID_USER_INFO' });
    }
});

app.listen(process.env.PORT || 3000, () => console.log('Server started!'));
