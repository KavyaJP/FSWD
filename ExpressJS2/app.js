const express = require('express')
const app = express()
const port = 3000

// Middleware - this is a function that will be called automatically
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.sendFile(__dirname+'/home.html')
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname+'/about.html')
})

app.get('/contact', (req, res) => {
  res.send('Contact page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log('The app started on http://localhost:3000')