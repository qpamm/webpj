const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.send('Hello home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})