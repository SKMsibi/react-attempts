//TODO: Use morgan or some service like sentry.io

module.exports = (req, res, next) => {
    console.log(`${new Date().toUTCString()} ${req.originalUrl} ${req.method}:${req.originalUrl}`)
    next()
}