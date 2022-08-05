//  This program creates a simple NodeJS server

//  Add express from the NPM
const express = require("express")

//  Add the built-in NodeJS http module
//const http = require("http")

//  Current machine (loop back address)
const hostname = "127.0.0.1"

//  Default port (number 4000)
const port = process.env.port || 4000

//  Create a new instance of express
//  and call it app
const app = express()

//  Action to take when we are at
//  the home page of our app
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1><p>How are you today?</p>")
})

app.listen(port, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
)

/*app.get('/', (req, res) => {
res.send('Hi!')
})
app.listen(3000, () => console.log('Server ready'))

//  Create our own NodeJS server
const server = http.createServer((req, res) => {
  res.statusCode = 200
  //res.setHeader("Content-Type", "text/plain")
  //res.end("Hello World\n")
  res.setHeader("Content-Type", "text/html")
  res.end("<h1>Hello World</h1><p>How are you?</p>\n")
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
*/
