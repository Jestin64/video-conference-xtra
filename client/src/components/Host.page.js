import React from "react"
import Timer from "./Timer.js"
import Chat from "./Chat.part.js"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: '100vh',
        width: "fill",
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function Host() {
    const classes = useStyles();

    return (
        <div className="host">
            <h2>Host page</h2>
            
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={1}>
                        <Grid item xs={3}>
                            {/* <Paper className={classes.paper} >
                                <ParticipantList />
                            </Paper> */}
                        </Grid>

                        <Grid item xs={6}>
                            <Paper className={classes.paper} >
                                <Timer />
                            </Paper> 
                        </Grid>

                        <Grid item xs={3}>
                            <Paper className={classes.paper} >
                                <Chat />   
                            </Paper>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}