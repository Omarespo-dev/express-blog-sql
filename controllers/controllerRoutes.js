// importo la connessiione con il db
const connection = require("../data/blog_db")

function index(req, res) {
    // Prepariamo la query per ricavare i dati dal db
    const sql = `
    SELECT * 
    FROM posts`

    // Eseguo query
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: "Database query failed" })
        res.json(results)
    })
}

function show(req, res) {
    // ricaviamo ID
    const id = parseInt(req.params.id)

    // Prepariamo la query per ricavare i dati dal db
    const sql = `
    SELECT 
    posts.*, (SELECT GROUP_CONCAT(tags.label SEPARATOR ', ') 
    FROM post_tag 
    JOIN tags ON post_tag.tag_id = tags.id 
    WHERE post_tag.post_id = posts.id) AS tags
    FROM posts
    WHERE posts.id = ?;`

    // Eseguo query
    connection.query(sql, [id], (err, results) => {
        // Gestione dell errore del db 500
        if (err) return res.status(500).json({ error: "Database query failed" })

        // Gestione dell errore di non trovato 404
        if (results.length === 0) return res.status(404).json({ error: "Not found" })
        res.json(results[0])

        // console.log(results[0])
    })
}

function store(req,res){
    const {title,content,image} =req.body
    
    // Prepariamo la query per ricavare i dati dal db
    const sql = `
    INSERT INTO posts (title,content,image)
    values (?,?,?)`

    // Eseguo query
    connection.query(sql, [title,content,image], (err, results) => {
        // Gestione dell errore del db 500
        if (err) return res.status(500).json({ error: "Database query failed" })

        res.json(results)
    })

}

function destroy(req, res) {

    // ricaviamo ID
    const id = parseInt(req.params.id)

    // Prepariamo la query per ricavare i dati dal db
    const sql = `
    DELETE 
    FROM posts
    WHERE id = ?`


    // Eseguo query
    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: "Database query failed" })
        res.sendStatus(204)
    })
}



module.exports = {
    index,
    destroy,
    show,
    store
}