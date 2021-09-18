import React, { useState, useEffect } from "react"
import { Button, ButtonGroup } from '@material-ui/core'
import { io } from "socket.io-client";

//every tick emit a message with the tick count to the server 

const socket = io("ws://localhost:3000")

export default function LiveVideo() {
    const [timer, setTimer] = useState()

    useEffect(()=>{
        timer > 0 && setTimeout(()=>{
            setTimer(timer - 1)
            // emit a tick message to the server to be picked up and then rebroadcasted to other participants
            socket.emit('tick', timer)

        }, 1000)
    }, [timer])

    function handleOnClick(e) {
        e.preventDefault()
        setTimer(e.target.value)
    }

    return (
        <div style={{bottom:'0'}}>
            <h4 style={{color: "black"}}>Timer: {timer}</h4>

            <ButtonGroup color="primary" aria-label="outlined primary button group" >
                <Button onClick={handleOnClick} value={15} >15</Button>
                <Button onClick={handleOnClick} value={20} >20</Button>
                <Button onClick={handleOnClick} value={25} >25</Button>
                <Button onClick={handleOnClick} value={30} >30</Button>
            </ButtonGroup>
        </div>
    )
}