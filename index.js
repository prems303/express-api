var bodyParser = require('body-parser')
var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')

var index = require('./routes/index')

var routes = require('./routes')
// app.get('/widgets/:id', routes.getWidget)

var PORT = 3000

var app = express()
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', index.get)
app.get('/users', routes.getUsers)
app.get('/users/:id', routes.getUser)
app.delete('/users/:id', routes.delUser)
app.put('/users/:id', routes.putUser)
app.post('/users/:id', routes.postUser)
app.get('/users?search=wombat', routes.filUser)
// app.get('/widget', routes.getWidget)

// app.get('/widgets/:id', function (req, res){
//   var id = req.params.id
//   res.json({id: id, name: 'Good widget'})
// })

// app.get('/users/:id', function (req, res){
//   var id = req.params.id
//   res.json({id: id, name: 'Good users'})
// })

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
