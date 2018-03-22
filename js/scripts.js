$(document).ready(function() {
  $("#giraffe").click(function(event) {
    event.preventDefault();
    $(".animalInfo").fadeOut(200);
    $("#giraffeInfo").fadeIn();
});
    $("#turtle").click(function(event) {
      event.preventDefault();
      $(".animalInfo").fadeOut(200);
      $("#turtleInfo").fadeIn();
});
      $("#penguin").click(function(event) {
        event.preventDefault();
        $(".animalInfo").fadeOut(200);
        $("#penguinInfo").fadeIn();
});

});
 
