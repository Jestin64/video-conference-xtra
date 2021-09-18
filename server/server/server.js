const app = require("express")()
const httpserver = require("http").createServer(app)  // connect with express middleware
const io = require("socket.io")(httpserver, {
    cors: {origin: "*"}
})  // connect with httpserver

const PORT = 3000
    
// test socket works by refreshing browser 
// app.get('/', (req, res) => {
//   console.log("hey")
// });

//first event to listen for 
io.on("connection", (socket)=>{
    console.log("New user connected")
    //listen to events triggered by the client
    socket.on('message', ({name, message})=>{  
        // re emit the message event to all clients connected so that it appears in everyones chat parallely  
        io.emit('message', `${name} : ${message}`)
    })

    socket.on('tick', (tick)=>{  
        io.emit('tick', `${tick}`)
    })

})

//listen here
httpserver.listen(PORT, err=>{
    if(err){
        console.error(err)
    }
    console.info("https Server opened at port: ", PORT)
})

// server with websocket is now configured to be served with nodemon at port 3000