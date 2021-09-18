import React, { useEffect, useState } from "react"
import { io } from "socket.io-client";
import { TextField, Button } from '@material-ui/core'
import Container from '@material-ui/core/Container';


const socket = io("ws://localhost:3000")


export default function Chat() {
    const [state, setState] = useState({
        name: "",
        message: ""
    })
    const [chat, setChat] = useState([])

    useEffect(() => {
        //when socket recies a message from the emitted message from the server
        socket.on('message', (name, message) => {
            setChat([...chat, { name, message }])
        })
    })


    function handleOnChange(e) {
        e.preventDefault()
        setState({ ...state, [e.target.name]: e.target.value })
    }


    function handleOnClick(e) {
        e.preventDefault()
        const { name, message } = state
        socket.emit('message', { name, message })
        setState({ message: "", name })       //reset message after submitting but keep the name
    }

    const renderList = chat.map(({ message, name }, idx) => {
        return (
            <div key={idx}>
                <span> {name} : {message} </span>
            </div>
        )
    })

    return (
        <div className="chat">
            <h3>live chat</h3>
            <div className="ul-list">
                <ul className="list">
                    {/* here messages will get filled */}
                    {chat.length > 0 ? renderList : null}
                </ul>
            </div>

            <Container maxWidth="sm">
                <TextField
                    name="name"
                    onChange={e => handleOnChange(e)}
                    value={state.name}
                    variant="outlined"
                    label="Name"
                />
                <TextField
                    name="message"
                    onChange={e => handleOnChange(e)}
                    value={state.message}
                    variant="outlined"
                    label="Message"
                />

                <Button variant="contained" color="default" onClick={handleOnClick}>
                    Send
                </Button>
                
            </Container>

        </div>
    )
}