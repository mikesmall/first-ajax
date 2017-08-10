document.addEventListener("DOMContentLoaded", function() {

  // Step 1:
  // In the linked ajax.js file, build an AJAX request that:
  // retrieves the information at the root path of the server, by sending an empty JavaScript object, and expecting a text response.

  // Back in ajax.js, Create a 'click' event handler for the button, and move your AJAX call inside it.

  var firstButton = document.getElementById('step12button');

  firstButton.addEventListener("click", function() {

    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: 'GET',
      data: '',
      dataType: 'text',
    });

    console.log('The button was clicked!');

  }); // firstButton.addEventListener

}); // DOMContentLoaded
