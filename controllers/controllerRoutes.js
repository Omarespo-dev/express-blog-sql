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


function destroy(req,res){
    
    // ricaviamo ID
    const id = parseInt(req.params.id)

    // Prepariamo la query per ricavare i dati dal db
    const sql= `
    DELETE 
    FROM posts
    WHERE id = ?`


    // Eseguo query
    connection.query(sql,[id],(err) => {
        if(err) return res.status(500).json({error: "Database query failed" })
        res.sendStatus(204)
    })
}











module.exports = {
    index,
    destroy
}