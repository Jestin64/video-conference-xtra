module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const app = __webpack_require__(/*! express */ "express")();

const httpserver = __webpack_require__(/*! http */ "http").createServer(app); // connect with express middleware


const io = __webpack_require__(/*! socket.io */ "socket.io")(httpserver, {
  cors: {
    origin: "*"
  }
}); // connect with httpserver


const PORT = 3000; // test socket works by refreshing browser 
// app.get('/', (req, res) => {
//   console.log("hey")
// });
//first event to listen for 

io.on("connection", socket => {
  console.log("New user connected"); //listen to events triggered by the client

  socket.on('message', ({
    name,
    message
  }) => {
    // re emit the message event to all clients connected so that it appears in everyones chat parallely  
    io.emit('message', `${name} : ${message}`);
  });
  socket.on('tick', tick => {
    io.emit('tick', `${tick}`);
  });
}); //listen here

httpserver.listen(PORT, err => {
  if (err) {
    console.error(err);
  }

  console.info("https Server opened at port: ", PORT);
}); // server with websocket is now configured to be served with nodemon at port 3000

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("socket.io");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./server/server.js");
/******/ })()
;