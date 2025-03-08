const express = require("express")
const app = express()
const port = 3000

//  BODY PARSER JSON
app.use(express.json())
app.use(express.static("public"))

// importiamo i router e li utilizziamo
const routes = require("./router/routes")
// dando /post per la rotta
app.use("/post",routes)



// ROTTA HOME 
app.get("/",(req,res)=>{
    res.send("questo e il server mio!!!!")
})



// STAI IN ASCOLTA DELLA PORTA
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})