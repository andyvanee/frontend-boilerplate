import express from "express"

const PORT = 8000
const server = express()

server.use(express.static("./dist"))

server.listen(PORT, console.log("Listening", { PORT }))
