let express = require('express')
let handlebars = require('express-handlebars')
let path = require('path')
let fortune = require('./lib/fortune.js')
let app = express()
app.use(express.static(path.resolve(__dirname, './public')))
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.set('port', process.env.PORT || 3000)
app.use((req, res, next) => {
  res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1'
  console.log(app.get('env'))
  console.log(res.locals)
  next()
})
app.get('/', (req, res) => {
  // res.send('hello world')
  // console.log(req.url)
  // console.log(req.method)
  // console.log(req.header)
  // console.log(req.headers)
  // console.log(req.route)
  // console.log(req.route.stack)
  res.render('home')
})
app.get('/about', (req, res) => {
  res.render('about', {
    fortune: fortune.getFortune(),
    pageTestScript: '/qa/tests-about.js'
  })
})

app.get('/tours/hood-river', (req, res) => {
  res.render('tours/hood-river')
})
app.get('tours/request-group-rate', (req, res) => {
  res.render('tours/request-group-rate')
})

app.listen(app.get('port'), 'localhost', () => {
  console.log(
    `express started on localhost:// + ${app.get('port')}`
  )
})
