document.addEventListener("DOMContentLoaded", function() {

  var firstButton  = document.getElementById('step12button');
  var secondButton = document.getElementById('step3456button');

  firstButton.addEventListener('click', function() {
    console.log('The step 1/2 button was clicked!');
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: '',
      dataType: 'text',
    });
  });

  secondButton.addEventListener('click', function() {
    console.log('The step 3/4/5/6 button got clicked!');
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong/',
      method: 'GET',
      data: '',
      dataType: 'text',
    }).done(function (responseData) {
      console.log('Response data: ' + responseData);
      $('#step3456').append('The server says: ' + responseData);
    }).fail(function () {
      console.log('Fail, fail, fail!');
      $('#step3456').append('The request failed! Sorry!');
    }); //done+fail
  }); //click handler

}); //DOMContentLoaded
