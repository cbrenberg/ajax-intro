console.log('client.js');

$(document).ready(readyNow);

function addBook() {
  console.log('in addBook');
  //get user inputs & create new object
  let objectToSend = {
    title: $('#titleIn').val(),
    author: $('#authorIn').val(),
    genre: $('#genreIn').val(),
    pages: $('#pagesIn').val()
  }
  console.log(objectToSend)
  //send object to the server via AJAX POST
  $.ajax({
    method: 'POST',
    url: '/books',
    data: objectToSend
  }).then(function(response){
    console.log('back from server with:', response);
    //update books display
    getBooksFromServer();
  }).catch(function(error){
    alert('error:', error)
  })
}

function getBooksFromServer() {
  $.ajax({
    method: 'GET',
    url: '/books'
  }).then( function( response ) {
    console.log('back from server with:', response);
    let el = $('#booksOut');
    el.empty();
    for (let book of response) {
      el.append(`<li>${book.title} by ${book.author}</li>`);
    }
  }).catch((function(error) {
    alert('error:', error);
  }))
} //end getBooksFromServer

function readyNow () {
  $('#addBookButton').on('click', addBook);
  getBooksFromServer();
} // end readyNow