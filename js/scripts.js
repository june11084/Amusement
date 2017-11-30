$(document).ready(function() {
  var height = parseInt(prompt("Please enter your height (inches)"));

  if (height >= 60 && height < 86) {
    $('#adult').show();
  };
  if(height < 60){
    $('#minor').show();
  };
  if(height > 85){
    $('#giant').show();
  };
});
