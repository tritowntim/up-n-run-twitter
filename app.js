var express = require('express')

var app = express.createServer()

app.get('/', function(req, res) {

	res.send('Welcome to Up-N-Run Twitter')

})


app.get('/yo', function(req, res) {
	res.send('Don\'t get fresh yo')
})

app.listen(8000)
console.log('listening on http://localhost:8000 . . .')