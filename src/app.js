let express = require('express')
let handlebars = require('express-handlebars')
// let fortune = require('./lib/fortune.js')
let app = express()
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.set('port', process.env.PORT || 3000)
app.get('/', (req, res) => {
  // res.send('hello world')
  res.render('home')
})
// app.get('/about', (req, res) => {
//   res.render('./views/about', { fortune: fortune.getFortune() })
// })

app.listen(app.get('port'), 'localhost', () => {
  console.log(
    `express started on localhost:// + ${app.get('port')}`
  )
})
