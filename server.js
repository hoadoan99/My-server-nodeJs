const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
var jsonParser = bodyParser.json()

app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/contact', (req,res) => {
//   res.send('Contact Me: overwatch17777@gmail.com');
// })
// app.get('/about', (req,res) => {
//   res.send('My name is HoaDoan and i love game and code!');
// })
// app.get('/hobbies', (req,res) => {
//   res.send('<ul><li>Game</li><li>Gym</li><li>Code</li></ul>');
// })
app.get("/", (req,res)=>{
  res.sendFile('index.html' , { root : __dirname});
});
app.post('/', function (req, res) {
  console.log(req.body);
  res.send('welcome')
})
app.listen(port);
