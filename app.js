var express = require('express'),
	ejs = require('ejs'),
	port = 8000,
	tweets = []

var app = express.createServer()
app.listen(port)
console.log('listening on http://localhost:' + port + ' . . .')

app.get('/', function(req, res) {

	var title = 'Chirpie',
		header = 'Welcome to Chirpie'

	res.render('layout.ejs', {
		locals : {
			'title': title,
			'header': header,
			'tweets': tweets,
			stylesheets: ['/public/style.css']
		}
	})

})


app.get('/yo', function(req, res) {
	res.send('Don\'t get fresh yo')
})

app.post('/send', express.bodyParser(), function(req, res) {
	if (req.body && req.body.tweet) {
		tweets.push(req.body.tweet)
		if (acceptsHtml(req.headers['accept'])) {
			res.redirect('/', 302)
		} else {
			res.send({status: "ok", message: "so tweeted!"})			
		}
	} else {
		res.send({status: "no-go", message: "tweetless?"})
	}
})

app.get('/tweets', function(req,res) {
	res.send(tweets)
})

function acceptsHtml(header) {
	var accepts = header.split(',')
	for (i=0;i<accepts.length;i+=0) {
		if (accepts[i] === 'text/html') { return true }
	}
	return false
}



