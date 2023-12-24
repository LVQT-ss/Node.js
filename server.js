const express = require('express') // common js 
const app = express() // app express 
const port = 3000 // port 
// khai báo route 
app.get('/', (req, res) => {
    res.send('Hello World! this is quoc thinh')
})
app.get('/abc', (req, res) => {
    res.send('this is abc route')
})

app.get('/2', (req, res) => {
    res.send('<h1>thinh le viet quoc</h1>')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})