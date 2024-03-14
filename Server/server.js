const express = require(express)
const cors = require(cors)

const app = express()

app.use(cors({
    origin: ["http://localhost:5174", "http://localhost:5000"]
}))

app.get("/api/test", (req, res) => {
    res.status(200).json({ message: "SUCCESS" })
})

app.listen(3000, () => console.log("Sever is up and running..."))