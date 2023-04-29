const router = require('express').Router()
const { authorizer, fieldsValidator } = require('../middlewares')

const authControllers = require('../controllers/auth')

module.exports = (db) => {
    router.post('/signup', fieldsValidator, authControllers.signup(db))
    router.post('/signin', fieldsValidator, authControllers.signin(db))
    router.post('/signout', authorizer, authControllers.signout())

    return router
}