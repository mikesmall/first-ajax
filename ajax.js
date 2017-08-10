document.addEventListener("DOMContentLoaded", function() {

  // Step 1:
  // In the linked ajax.js file, build an AJAX request that:
  // retrieves the information at the root path of the server, by sending an empty JavaScript object, and expecting a text response.

  $.ajax({
    url: "http://first-ajax-api.herokuapp.com/",
    method: GET,
    data: "",
    dataType: text
  });

});
