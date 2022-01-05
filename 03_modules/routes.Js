
const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write(
            "<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Send Message</button></form></body>")
        res.write("</html>");
        return res.end();
    }
    
    if (url === "/message" && method === "POST") {
    
        const reqBody = [];
    
        req.on("data", (chunk) => {
            console.log(chunk);
            reqBody.push(chunk);
        });
    
        req.on("end", () => {
            const parseBody = Buffer.concat(reqBody).toString();  // incoming data is file (text)
            console.log(parseBody);
            const message = parseBody.split("=")[1];
            fs.writeFile("message.txt", message, (err) => {
                if (err) console.log(err.message);
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    
    } else {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write("<body><h1>Nodejs Course with Academind</h1></body>");
        res.write("</html>");
        res.end();
    }

}

// module.exports = requestHandler; // method 1

module.exports = {  // method 2 & 3
    requestHandler,
    someText:"Some text to export" 

}

// module.exports.handler = requestHandler; // method 4
