//requires
const express = require('express');
const app = express();
//uses
app.use(express.static('server/public'))
//globals
const port = 5000;
let books = [];

/// --- TEMP --- ///
let tempBook = {
  title: 'Snow Crash', 
  author: 'Neal Stephenson', 
  genre: 'Science Fiction',
  pages: '480'
}
books.push(tempBook);
/// --- END --- ///
//spin up server
app.listen(port, ()=>{
  console.log('listening on port ' + port);
})
app.get( '/books', (req, res) => {
  console.log('in /books GET');
  res.send(books);
})//end /books GET