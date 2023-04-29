const { hash, serialize } = require('simple-stateless-auth-library')
const errors = require('../../misc/errors')
const { selectUser } = require('../../models/auth')

module.exports = (db) => async (req, res, next) => {
    const { username, password } = req.body

    const response = await selectUser(await db)(username, hash.compare(password))

    if(!response.ok) return next(errors[response.error_code || 500])

    serialize(res, response.content)

    res.status(200).json({
        success: true,
    })
}