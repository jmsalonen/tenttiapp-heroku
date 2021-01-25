const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db')
const passport = require('passport')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3001

app.use(express.static('./client/build'))








// -- WEBSOCKET -- 

const SOCKETPORT = 3002

const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({ port: SOCKETPORT })

const messageClients = (data) => {
  wss.clients.forEach((client) => {
    client.send(data)
  })
}

wss.on('connection', (ws) => {
  console.log('WebSocket connected')
  ws.on('message', (data) => {
    messageClients(data)
  })
})

const websocketmiddleware = (req, res, next) => {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(req.data))
  })
  console.log("websocketmiddleware")
} 

// -- /WEBSOCKET -- 

require('./passport/passport')
//const routes = require('./routes/routes')
const userRoutes = require('./routes/user-routes')
const api = require('./routes/api')
const user = require('./routes/user')
const auth = require('./routes/authentication')
const edits = require('./routes/edits')

app.use(cors()) 
app.use(bodyParser.json()) 
app.use('/', auth)
app.use('/', api)
app.use('/', user)
//app.use('/', routes)
app.use('/user', passport.authenticate('jwt', { session: false }), userRoutes)
app.use('/edit', edits, websocketmiddleware)








// DROPZONE
/* 
const _ = require('lodash');

const fileUpload = require('express-fileupload')
app.use(fileUpload({
  createParentPath: true
}))

app.post('/upload-one', (req, res) => {
  console.log(__dirname)
  try {
    if (!req.files) {
      res.send({ 
        status: false,
        message: 'no file uploaded'
      })
    }
    else {
      let newFile = req.files.file
      newFile.mv('./uploads/' + newFile.name)
    }
  }
  catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

app.post('/upload-many', (req, res) => {
  console.log(__dirname)
  try {
    if (!req.files) {
      res.send({ 
        status: false,
        message: 'no file uploaded'
      })
    }
    else {
      _.forEach(_.keysIn(req.files.file), (key) => {
        let uploadFile = req.files.file[key]
        uploadFile.mv('./uploads/' + uploadFile.name)
      })
    } 
  }
  catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})
 */

//  /DROPZONE 

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
