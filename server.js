require("dotenv").config()
const express=require("express");
const app=express();
const { connection } = require("./db")
const errorHandler = require('./middleware/errorHandler')
const path = require('path')
const PORT=process.env.PORT||3500
const cookieParser = require('cookie-parser')
const cors = require('cors')

const build_dirname = path.resolve(__dirname, "client", "build")
app.use(express.static(build_dirname));

app.use(cors())
app.use(express.json())
app.use(cookieParser())

// app.use("/",require("./routes/root"))
// app.use("/auth",require("./routes/authRoutes"))
// app.use("/users",require("./routes/userRoutes"))
// app.use('/notes', require('./routes/noteRoutes'))
app.use("/api",require("./routes/root"))
app.use("/api/auth",require("./routes/authRoutes"))
app.use("/api/users",require("./routes/userRoutes"))
app.use('/api/notes', require('./routes/noteRoutes'))


// app.all('*', (req, res) => {
//     res.status(404)
//     if (req.accepts('html')) {
//         res.sendFile(path.join(__dirname, 'views', '404.html'))
//     } else if (req.accepts('json')) {
//         res.json({ message: '404 Not Found' })
//     } else {
//         res.type('txt').send('404 Not Found')
//     }
// })
app.get("*", (req, res) => {
    res.sendFile(path.resolve(build_dirname, "index.html"));
})
app.use(errorHandler)
app.listen(PORT, async () => {
    try {
        await connection
        console.log("database is connected")
    } catch (error) {
        console.log(error)
    }
    console.log("Server is running on port number", PORT)
})
