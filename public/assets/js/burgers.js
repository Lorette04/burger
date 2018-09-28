// Make sure we wait to attach  handlersour until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: newDevoured
      };
      // console.log("NEWSTATE ", newDevouredState);

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        method: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed Devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
          // make code here to move burger into devoured list
        }
      );
    });
  
    $(".create-form-btn").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("inside Ajax")
      var newBurger = {
        name: $("#burger").val().trim(),
        ingredient: $("#ingredient").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        method: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        method: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  