import express from "express"
import cors from "cors"
const app = express()
app.use(express.json())
app.use(cors())

// C
app.post("/",(req,res) => {})
// R
app.get("/", (req,res)=>{
    const todo = ["take out the garbage","walk the dog","have dinner"]
    res.status(200).json(todo)
})
// U
app.put("/",(req,res) => {})
// D
app.delete("/",(req,res) => {})


app.put

const port = 8000
app.listen(port,()=> {
    console.log("ready on port ",port)
})
