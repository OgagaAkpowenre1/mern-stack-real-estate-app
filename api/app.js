import express from "express"
import cookieParser from "cookie-parser"
import postRoute from "./routes/post.route.js"
import authRoute from "./routes/auth.route.js"

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/post", postRoute)
app.use("/api/auth", authRoute)

app.use("/", (req, res) => {
    res.send("Welcome to the server!")
})


app.use("/api/test", (req, res) => {
    res.send("It works!")
})




app.listen(5000, () => {
    console.log("Server is running!")
})