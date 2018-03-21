let express = require('express')
let handlebars = require('express-handlebars')
let fortune = require('./lib/fortune.js')
handlebars.create({
  defaultLayout: 'main'
})
let app = express()
app.engine('handlebars', handlebars.engine)
app.set('view engine', handlebars)
app.set('port', process.env.PORT || 3000)
app.get('/about', (req, res) => {
  res.render('about', { fortune: fortune() })
})

app.listen(app.get('port'), 'localhost', () => {
  console.log(
    `express started on localhost:// + ${app.get('port')}`
  )
})
