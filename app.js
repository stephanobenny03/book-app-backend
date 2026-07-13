const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())

app.get("/test",(req,res) =>{
    res.send("hello")

})
app.get("/view-all",(req,res)=>{
    res.send("view all")
})

app.listen(3000,()=>{
    console.log("server started")
})