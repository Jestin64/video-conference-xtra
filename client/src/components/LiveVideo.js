import React, { useState, useEffect } from "react"
import { io } from "socket.io-client";

const socket = io("ws://localhost:3000")


export default function LiveVideo(){
    const [timer, setTimer] = useState(0)
    console.log("live video comp timer: ", timer)

    useEffect(() => {
        socket.on('tick', (timer) => {
            setTimer(timer)
        })
    })


    return(
        <div className="live-video">
            <h1>placeholder for video stream</h1>
            <h3>Timer: {timer}</h3>
        </div>
    )
}