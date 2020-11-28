import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/test", (req, res) => {
  res.send("The sedulous hyena ate the antelope!");
});
app.listen(port, () => {

  return console.log(`server is listening on ${port}`);
});
