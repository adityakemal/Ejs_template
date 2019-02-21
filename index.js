const express = require('express')
const bodyParser = require('body-parser')

var app = express()
//set engine
app.set('view engine', 'ejs');
//static public
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=>{
  var data = [{nama : "kemal"}]
  var y = ['bandung','jakarta','surabaya','jogja']
  data.push(y)
  console.log(data[1]);
  res.render('pages/index', {data})
})

app.get('/loop-for-of', (req, res)=>{
  var arr = [
    {nama:'kemal', minuman:" aqua"},
    {nama:'aditya', minuman:" uc100"},
    {nama:'arif', minuman:" mixmax"},
    {nama:'uwa', minuman:" kopi"}
  ]
  res.render('pages/for-of',{arr})
})



app.listen('3000', ()=> console.log('ruuuuuuuuuuuuuuun 3000!!!!!'))
