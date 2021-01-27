const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db')
const passport = require('passport')
const app = express()
const PORT = process.env.PORT || 3001
const path = require('path')

app.use(express.static('./client/build'))

require('./passport/passport')
const userRoutes = require('./routes/user-routes')
const teacher = require('./routes/teacher')
const student = require('./routes/student')
const auth = require('./routes/authentication')

app.use(cors()) 
app.use(bodyParser.json()) 
app.use('/', auth)
app.use('/user', passport.authenticate('jwt', { session: false }), userRoutes)
app.use('/user/teacher', teacher)
app.use('/user/student', student)
console.log(__dirname)
console.log(path.join(__dirname+'/client/build/index.html'))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
