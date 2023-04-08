const express = require("express")
const morgan = require("morgan")
const app = express()
const ngrok = require("ngrok")
const path = require("path")
app.set("trust proxy", true)

app.use(morgan("common"))

app.get("/", (req, res, next) => {
  res.status(200).send("<h1>hello world</h1><script>alert(document.cookie)</script>")
})
app.get("/secret-php", (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, "file", "exploit.php"))
})

app.listen(7777, () => {
  console.log("server started")
})

ngrok.connect(7777).then((val) => {
  console.log("This is the url: " + val)
})
