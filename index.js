// TODO: if sent to production, we would need to setup https server by using certificates

const app  = require('./src/app')
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is starting on ${port}`)
})

