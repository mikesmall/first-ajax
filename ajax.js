document.addEventListener("DOMContentLoaded", function() {

  var firstButton  = document.getElementById('step12button');
  var secondButton = document.getElementById('step3456button');
  var thirdButton  = document.getElementById('step7button');

  firstButton.addEventListener('click', function() {
    console.log('The Step 1+2 button was clicked!');
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: '',
      dataType: 'text',
    });
  });

  secondButton.addEventListener('click', function() {
    console.log('The Step 3-4-5-6 button got clicked!');
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping/',
      method: 'GET',
      data: '',
      dataType: 'text',
    }).done(function(responseData) {
      console.log('Response data: ' + responseData);
      $('#step3456').append('The server says: ' + responseData);
    }).fail(function() {
      console.log('Fail, fail, fail!');
      $('#step3456').append('The request failed! Sorry!');
    }).always(function() {
      console.log('Request and response complete.');
      // $('#step3456').append('Win or lose, my work is done here.');
    });
  });

  thirdButton.addEventListener('click', function() {
    console.log('The Step 7 button is hereby clicked.');
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count/',
      method: 'GET',
      data: '',
      dataType: 'text',
    }).done(function(responseData) {
      console.log('How many Bitmakers have been here? ' + responseData);
      $('#step7').append(responseData + ' Bitmakers have been here. This includes you, friend.');
    }).always(function() {
      console.log('Request received and response sent.');
    })
  });

}); //DOMContentLoaded
