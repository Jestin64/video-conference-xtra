The Project aims to showcase how i have used socket.io to setup and emit events through the websocket protocol, I have designed the layout of the app to seperate concern into components and passing socket based events through the socket.io-client library to the appropriate components.

Incomplete:
1) Audio trigger for the countdown timer

NEW features I have custom added:
1) Live chat feature using socket.io


Technologies used: 
    Backend: NODEjs, express, httpserver, socket.io, webpack, nodemon
    front-end: Reactjs, material-ui, socket.io-client


Steps:
    1)cd into the server and client folder and serve the backend and front end with:
        -> yarn dev for backend( server.generated.js file will be served from the dist folder) and yarn start for front-end
    
    2)server is set to open at port 3000 and front-end at 4000
        -> Open multiple browser tabs with at localhost 4000 

    3) front-end has:
        a join as host button and a join as participant button
        -> select one as host and the rest of the tabs as participants

    4) select a name to use in the live chat for each tab and then begin texting
        -> if all works well then texts should be visible from other tabs as well
    
    5) in the host page tab, click on a timer, it should start counting down(if not click multiple times or reload the page), the same countdown should be visible in the other participant pages as well

hopefully it works fine on your end,
designed and implemented by Jestin jois
    
