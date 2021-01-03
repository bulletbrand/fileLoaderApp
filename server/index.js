const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")
const app = express()
const PORT = config.get('serverPort')

app.use(express.json()) //parse json string, express cannot do it by own
app.use("/api/auth", authRouter) //resigter router


const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"), {
            userNewUrlParser: true,
        })
        app.listen(PORT, () => {
            console.log('Server started on port', PORT)
        })
    } catch (e) {
        console.log('Server error')
    }
}

start()