const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('../build'))

app.get('/', (req, res) => res.send('Working'))
app.get('/api/user', (req, res) => res.send({
	name: 'Victor',
	email: 'vic@...'
}))
app.post('/user', (req, res) => {
	console.log(req.body)
	res.send({
		name: 'Victor',
		email: 'vic@...'
	})
})

app.listen(3001, () => console.log('Example app listening on port 3000!'))
