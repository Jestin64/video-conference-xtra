import React from "react"
import { useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


export default function Home() {
    const history = useHistory()

    return (
        <div className="home">
            {/* style this with a grey background and make it upper center */}
            <h2>Welcome to the video conference app Home page, would you like to join as,</h2>

            {/* 3 buttons to join as Host or as a participant and a live chat screen*/}
            <div className="home-buttons">

                <ButtonGroup variant="contained" color="default" aria-label="contained primary button group">
                    <Button onClick={() => history.push("/Host")}>Host</Button>
                    <Button onClick={() => history.push("/Participant")}>Participant</Button>
                    {/* <Button onClick={() => history.push("/Chat")}>Live Chat</Button> */}
                </ButtonGroup>

            </div>
        </div>
    )
}