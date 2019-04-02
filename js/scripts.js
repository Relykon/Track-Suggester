$(document).ready(function() {
  $("#btn1").click(function() {
    $("#quiz").slideToggle();
  });

  $("#quiz").submit(function(event) {
    var Q1 = parseInt($("input:radio[name=Q1]:checked").val());
    var Q2 = parseInt($("input:radio[name=Q2]:checked").val());
    var Q3 = parseInt($("input:radio[name=Q3]:checked").val());
    var Q4 = paresInt($("input:radio[name=Q4]:checked").val());
    var Q5 = paresInt($("input:radio[name=Q5]:checked").val());

    var language = Q1+Q2+Q3+Q4+Q5;

    if (language < 7) {
      $("#result2").hide();
      $("#result3").hide();
      $("#result1").show();
    }
    else if (language = 7 || 8) {
      $("#result1").hide();
      $("#result3").hide();
      $("#chris").show();
    }

    else {
      $("#result1").hide();
      $("#result2").hide();
      $("result3").show();
    }
    
    event.preventDefault();
  });
});
