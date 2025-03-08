const express = require("express")
const app = express()
const port = 3000




// ROTTA HOME 
app.get("/",(req,res)=>{
    res.send("questo e il server mio!!!!")
})









// STAI IN ASCOLTA DELLA PORTA
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})