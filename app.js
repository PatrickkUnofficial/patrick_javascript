const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000
const status = {}

app.use(express.urlencoded({extended:true}))

app.get("/api/server/status", (req,res) =>{
status.msg = "Server is up and ready";
res.json(status)
})

app.post("/api/submit-cat", async(req,res) => {
main(res.req.body.catName)
})

app.listen(PORT, ()=> {
console.log("API is listening on Port: ", PORT)
})


async function main(kittenName) {
await mongoose.connect('mongodb+srv://emmanuelpatrick:Patrickkkk_4@pato.d1thfev.mongodb.net/mydb?retryWrites=true&w=majority')
const kittySchema = new mongoose.Schema({name:String})
const kitten = new mongoose.model('Kitten', kittySchema)
const kitty1 = new kitten({name: kittenName})
console.log(kitty1.name)
kitty1.save()
}
