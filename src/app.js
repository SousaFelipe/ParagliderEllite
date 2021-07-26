

const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)


io.on('connection', socket => {

    socket.on('ping', pack => {

        console.log(`Received message: ${ pack.message }!`)

        socket.emit('pong', {
            message: 'Received successfully'
        })

    })
})


http.listen(3333, () => console.log("Listening on port 3333..."))