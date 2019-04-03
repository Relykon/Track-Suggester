$(document).ready(function() {
    $("#showQuiz").click(function() {
    $("#quiz").slideToggle();
    $("#results").hide();
    $(':input').prop('checked', false);

  });

  $("#quiz").submit(function(event) {
    event.preventDefault();

    var Q1 = parseInt($("input:radio[name=Q1]:checked").val());
    var Q2 = parseInt($("input:radio[name=Q2]:checked").val());
    var Q3 = parseInt($("input:radio[name=Q3]:checked").val());
    var Q4 = parseInt($("input:radio[name=Q4]:checked").val());
    var Q5 = parseInt($("input:radio[name=Q5]:checked").val());


    var language = (Q1+Q2+Q3+Q4+Q5);
    $("#results").show();
    $("#quiz").slideToggle();
    $("#showQuiz").text("Try Again");

    if (language < 7) {
      $("#result2").hide();
      $("#result3").hide();
      $("#result1").show();
    } else if (language == 7 || language == 8) {
      $("#result1").hide();
      $("#result3").hide();
      $("#result2").show();
    } else {
      $("#result1").hide();
      $("#result2").hide();
      $("#result3").show();
    }
  });
});
