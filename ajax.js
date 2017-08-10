document.addEventListener("DOMContentLoaded", function() {

  var firstButton = document.getElementById('step12button');

  firstButton.addEventListener("click", function() {
    console.log('The button was clicked!');
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: 'GET',
      data: '',
      dataType: 'text',
    });
  });

}); //DOMContentLoaded
