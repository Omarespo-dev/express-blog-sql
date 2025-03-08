// importo la connessiione con il db
const connection = require("../data/blog_db")

function index(req,res){
    // Prepariamo la query per ricavare i dati dal db
    const sql= `
    SELECT * 
    FROM posts`

    // Eseguo query
    connection.query(sql,(err,results) => {
        if(err) return res.status(500).json({error: "Database query failed" })
        res.json(results)
    })
}














module.exports = {
    index
}