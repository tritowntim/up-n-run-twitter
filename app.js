var express = require('express'),
	port = 8000,
	tweets = []

var app = express.createServer()
app.listen(port)
console.log('listening on http://localhost:' + port + ' . . .')

app.get('/', function(req, res) {

	res.send('Welcome to Up-N-Run Twitter')

})


app.get('/yo', function(req, res) {
	res.send('Don\'t get fresh yo')
})

app.post('/send', express.bodyParser(), function(req, res) {
	if (req.body && req.body.tweet) {
		tweets.push(req.body.tweet)
		res.send({status: "ok", message: "so tweeted!"})
	} else {
		res.send({status: "no-go", message: "tweetless?"})
	}
})

app.get('/tweets', function(req,res) {
	res.send(tweets)
})

