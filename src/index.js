const express = require("express")
const port = 8080

app = express()
app.post("/teste", (req, resp) => {resp.json({ teste: "Hello world" })})
app.listen(port);

console.log("Rodand na porta: " + port);
