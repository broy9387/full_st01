let express = require("express")
let cors=require("cors")
let app=express()
const PORT=5000;
app.use(express.json())
app.use(cors())

let items=[]
app.get("/",(req,res)=>{
    res.json(items)
})
app.post("/items",(req,res)=>{
    items.push(req.body)
    res.json(req.body)
})

app.put("/items/:id",(req,res)=>{
    let id=req.params.id
    let upd=req.body
    items[id]=upd
    console.log(req.params.id)
    res.json(upd)
})

app.delete("/items/:id",(req,res)=>{
    let id=req.params.id
    items.splice(id,1)
    res.json("Item deleted successfully")
})

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT} `)
})