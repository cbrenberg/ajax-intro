console.log('client.js');

$(document).ready(readyNow);

function getBooksFromServer() {
  $.ajax({
    method: 'GET',
    url: '/books'
  }).then( function( response ) {
    console.log('back from server with:', response);
    let el = $('#booksOut');
    for (let book of response) {
      el.append(`<li>${book.title} by ${book.author}</li>`);
    }
  }).catch((function(error) {
    alert('error:', error);
  }))
} //end getBooksFromServer

function readyNow () {
  console.log('jQuery');
  getBooksFromServer();
} // end readyNow