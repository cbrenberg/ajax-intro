//requires
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
//globals
const port = 5000;
let books = [];
//spin up server
app.listen(port, ()=>{
  console.log('listening on port ' + port);
})
app.get( '/books', (req, res) => {
  console.log('in /books GET');
  res.send(books);
})//end /books GET
//post route
app.post( '/books', (req, res) => {
  console.log('in /books POST', req.body);
  books.push(req.body);
  res.sendStatus(200);
})