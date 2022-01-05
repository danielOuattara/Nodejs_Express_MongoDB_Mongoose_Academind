
const http = require("http");
// const routes = require("./routes");  
const { requestHandler} = require("./routes.Js")  // method

// const server = http.createServer(routes); // method 1

// const server = http.createServer(routes.requestHandler); // method 2

const server = http.createServer(requestHandler); // method 3

// const server = http.createServer(routes.handler); // method 4
 
server.listen(3000);

//------------------------------------------------------------------