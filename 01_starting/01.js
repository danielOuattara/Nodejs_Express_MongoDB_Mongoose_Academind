
const fs = require("fs");

fs.writeFile("hello.txt", "Hello Nodejs", (err, data) => {
    if (err) throw err.message;
    console.log(data)
} )