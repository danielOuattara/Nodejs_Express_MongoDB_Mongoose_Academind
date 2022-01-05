
// const http = require("http");

// const server = http.createServer((req, res)=> {
//     console.log(req);
//     process.exit();
// })

// server.listen(3000);

// //------------------------------------------------------------------
// const http = require("http");

// const server = http.createServer((req, res)=> {
//     console.log(req.url, req.method, req.headers);
//     // process.exit();
// })

// server.listen(3000);

//------------------------------------------------------------------

// const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);
//     // process.exit();
//     res.setHeader("Content-Type", "text/html");
//     res.write("<h1>Hello Nodejs with Academind</h1>");
//     res.end();
// })

// server.listen(3000);

//------------------------------------------------------------------

// const http = require("http");

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if(url === "/") {
//         res.write("<h1>Welcome Nodejs with Academind</h1>");
//         return res.end();
        
//     }
//     console.log(req.url, req.method, req.headers);
//     // process.exit();
//     res.setHeader("Content-Type", "text/html");
//     res.write("<h1>Nodejs Course with Academind</h1>");
//     res.end();
// })

// server.listen(3000);

//------------------------------------------------------------------

// const http = require("http");

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url === "/") {
//         res.write("<html>");
//         res.write("<head><title>Enter Message</title></head>");
//         res.write("<body><form action='/message/check' method='POST'><input type='text' name='message'/><button type='submit'>Send</button></form></body>")
//         res.write("</html>");
//         return res.end();
//     }
    
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>My First Page</title></head>");
//     res.write("<body><h1>Nodejs Course with Academind</h1></body>");
//     res.write("</html>");
//     res.end();
// })

// server.listen(3000); 

//------------------------------------------------------------------

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url === "/") {
//         res.write("<html>");
//         res.write("<head><title>Enter Message</title></head>");
//         res.write("<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Send Message</button></form></body>")
//         res.write("</html>");
//         return res.end();
//     }

//     if(url === "/message" &&  method === "POST") {
//         fs.writeFileSync("message.txt", "Dummy text");
//         res.statusCode = 302;
//         res.setHeader("Location", "/");
//         return res.end();
//     }
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>My First Page</title></head>");
//     res.write("<body><h1>Nodejs Course with Academind</h1></body>");
//     res.write("</html>");
//     res.end();
// })
 
// server.listen(3000);

//------------------------------------------------------------------

//parse request !

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Send Message</button></form></body>")
        res.write("</html>");
        return res.end();
    }
    if(url === "/message" &&  method === "POST") {
        const reqBody = [];
        req.on("data",(chunk) => {
            console.log(chunk);
            reqBody.push(chunk);
        });

        req.on("end", () => {
            const parseBody = Buffer.concat(reqBody).toString();  // incoming data is file (text)
            console.log(parseBody);
            const message = parseBody.split("=")[1];
            fs.writeFileSync("message.txt", message);
        })
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Nodejs Course with Academind</h1></body>");
    res.write("</html>");
    res.end();
})
 
server.listen(3000);

//------------------------------------------------------------------


//event listener and file writing !

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url === "/") {
//         res.write("<html>");
//         res.write("<head><title>Enter Message</title></head>");
//         res.write("<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Send Message</button></form></body>")
//         res.write("</html>");
//         return res.end();
//     }

//     if(url === "/message" &&  method === "POST") {
//         const reqBody = [];
//         req.on("data",(chunk) => {
//             console.log(chunk);
//             reqBody.push(chunk);
//         });

//         req.on("end", () => {
//             const parseBody = Buffer.concat(reqBody).toString();  // incoming data is file (text)
//             console.log(parseBody);
//             const message = parseBody.split("=")[1];
//             fs.writeFileSync("message.txt", message);
//             res.statusCode = 302;
//             res.setHeader("Location", "/");
//             return res.end();
//         });
//     }
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>My First Page</title></head>");
//     res.write("<body><h1>Nodejs Course with Academind</h1></body>");
//     res.write("</html>");
//     res.end();
// })
 
// server.listen(3000);

// --------------------------------------------------------------------

//solution to writing ! = async

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url === "/") {
//         res.write("<html>");
//         res.write("<head><title>Enter Message</title></head>");
//         res.write("<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Send Message</button></form></body>")
//         res.write("</html>");
//         return res.end();
//     }

//     if(url === "/message" &&  method === "POST") {

//         const reqBody = [];
        
//         req.on("data",(chunk) => {
//             console.log(chunk);
//             reqBody.push(chunk);
//         });

//         req.on("end", () => {
//             const parseBody = Buffer.concat(reqBody).toString();  // incoming data is file (text)
//             console.log(parseBody);
//             const message = parseBody.split("=")[1];
//             fs.writeFile("message.txt", message, (err) => {
//                 if(err) console.log(err.message);
//                 res.statusCode = 302;
//                 res.setHeader("Location", "/");
//                 return res.end();
//             });
//         });

//     } else {
//         res.setHeader("Content-Type", "text/html");
//         res.write("<html>");
//         res.write("<head><title>My First Page</title></head>");
//         res.write("<body><h1>Nodejs Course with Academind</h1></body>");
//         res.write("</html>");
//         res.end();
//     }
// });
 
// server.listen(3000);

//------------------------------------------------------------------