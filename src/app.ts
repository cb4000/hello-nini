import express from "express";
import redis from "redis";
const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/test", (req, res) => {

const client = redis.createClient(6379, "redis-master");
client.on("error", (error)=> {
  console.error(error);
});
client.set("key", "value", redis.print);
client.get("key", (err, value) => {
  if (err) { throw err; }
  res.send("The sedulous hyena ate the antelope poop key!" + value.toString()) ;
});
});
app.listen(port, () => {

  return console.log(`server is listening on ${port}`);
});
