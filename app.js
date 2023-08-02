const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  //The app.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root.
  res.send("Hello World!"); //The callback function takes a request and a response object as arguments, and calls send() on the response to return the string "Hello World!"
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
}); //The final block starts up the server on a specified port ('3000') and prints a log comment to the console. With the server running, you could go to localhost:3000 in your browser to see the example response returned.

//run it in a bash command prompt by calling: node ./app.js

//Example of how to import your own modules using 'require':
const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension
console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
