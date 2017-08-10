document.addEventListener("DOMContentLoaded", function() {

  var firstButton  = document.getElementById('step12button');
  var secondButton = document.getElementById('step3456button');
  var thirdButton  = document.getElementById('step7button');
  var fourthButton = document.getElementById('step8button');
  var fifthButton  = document.getElementById('step9button');

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
      $('#step3456').append('<br>The server says: ' + responseData);
    }).fail(function() {
      console.log('Fail, fail, fail!');
      $('#step3456').append('<br>The request failed! Sorry!');
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
      $('#step7').append('<br>' + responseData + ' Bitmakers have been here. This includes you, friend.');
    }).always(function() {
      console.log('Request received and response sent.');
    })
  });

  fourthButton.addEventListener('click', function() {
    console.log('The Step 8 button felt a click!');
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time/',
      method: 'GET',
      data: {timezone: 'America/Moncton'},
      dataType: 'text',
    }).done(function(responseData) {
      console.log('The time in Moncton is: ' + responseData);
      $('#step8').append("<br> Right now in Moncton, it's " + responseData);
    })
  });

  fifthButton.addEventListener('click', function() {
    console.log('The fifth and final button knows who clicked it: You.');
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car/',
      method: 'GET',
      data: '',
      dataType: 'html',
    }).done(function(responseData) {
      console.log('Response data, HTML format: ');
      console.log(responseData);
      $('#car_list').append(responseData);
    })
  });

}); //DOMContentLoaded
