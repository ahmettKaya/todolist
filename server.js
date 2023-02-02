const path = require('path')
const express = require('express')
const app = express()
const PORT = 3000

//app.use(express.urlencoded({extended: false}))

// Serve static files
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/', express.static(path.join(__dirname, "node_modules/bootstrap/dist/")));

// Routers
app.use('/', require('./routes/root'))
app.use('/todo', require('./routes/api/todo'))

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})