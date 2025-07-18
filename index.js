import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send("<h1>Api rest</h1>")
})

const PORT = 3000
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))