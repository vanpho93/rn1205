const { sign, verify } = require('jsonwebtoken');

const SECRET_KET = 'ac138quwfecdqkef1quwvsiqdc';

function signPromise(obj) {
    return new Promise((resolve, reject) => {
        sign(obj, SECRET_KET, { expiresIn: '10 days' }, (error, token) => {
            if (error) return reject(error);
            resolve(token);
        });
    });
}

function verifyPromise(token) {
    return new Promise((resolve, reject) => {
        verify(token, SECRET_KET, (error, obj) => {
            if (error) return reject(error);
            resolve(obj);
        });
    });
}

module.exports = { signPromise, verifyPromise };
