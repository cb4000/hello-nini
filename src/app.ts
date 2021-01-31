import express = require("express");
import * as redis from "redis";
const app = express();
import http = require("http");
// tslint:disable-next-line:no-var-requires
const server = require('http').Server(app);
const port = 3000;
app.use(express.static("public"));



import ioserver, { Socket } from 'socket.io';
// import ioNS = require("socket.io");
// const server = require('http').Server(app);
// tslint:disable-next-line:no-var-requires
const io = require('socket.io')(server);

io.on("connection", socket => {
  // Log whenever a user connects
  console.log("user connected");

  // Log whenever a client disconnects from our websocket server
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });

  // When we receive a 'message' event from our client, print out
  // the contents of that message and then echo it back to our client
  // using `io.emit()`
  socket.on("message", message => {
    console.log("Message Received: " + message);
    io.emit("message", message);
  });
});

app.get("/test", (req, res) => {

const client = redis.createClient(6379, "redis-master");
client.on("error", (error) => {
  console.error(error);
});
client.set("key", "value", redis.print);
client.get("key", (err, value) => {
  if (err) { throw err; }
  res.send("The sedulous hyena ate the antelope poop key!" + value.toString()) ;
});
});
server.listen(port, () => {

  return console.log(`server is listening on ${port}`);
});
