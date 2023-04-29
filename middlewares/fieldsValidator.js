const errors = require('../misc/errors')

module.exports = (req, res, next) => {
    const { username, password } = req.body

    if(!username || !password) return next(errors[400])

    if(password.length < 4) return next(errors['pass_length'])

    next()
}