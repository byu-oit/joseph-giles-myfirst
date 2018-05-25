var say = require("./hello.js");

var spec = "Hello World";

console.log("Test will run below.");
output = say.hello();

if(output === spec){
    console.log("hello.hello meets spec with :\n", output);
}
else {
    console.log("hello.hello fails spec with :\n", output);
    process.exit(1);
}


