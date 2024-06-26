// http headers

const express = require("express");
const fs = require("fs")
const PORT = 8000;
const url = `http://localhost:${PORT}`
const app = express();
app.get("/api/users",(req, res) => {
  fs.readFile('../data.json', "utf-8", (err, data) =>{
      res.send(data)
  })
})

app.listen(PORT, () =>{
  console.log(`The server is running at ${url}`)
});
