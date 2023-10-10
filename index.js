const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

const data = [
    {
        name: "Product A",
        price: 19.99,
        id: 1
    },
    {
        name: "Product B",
        price: 29.99,
        id: 2
    },
    {
        name: "Product C",
        price: 14.99,
        id: 3
    },
    {
        name: "Product D",
        price: 9.99,
        id: 4
    }
]


app.get('/', (req, res) => {
    res.send('data')
})
app.get('/data', (req, res) => {
    res.send(data)
})
app.post('/data', (req, res) => {
    const user = req.body
    user.id = data.length + 1
    data.push(user)
    res.send(user)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})