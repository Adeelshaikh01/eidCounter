var eidDate = new Date("19 july, 2021").getTime();

var x = setInterval(function() {
  var todayDate = new Date().getTime();
  var distance = eidDate - todayDate;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").style.display = "none";
    document.getElementById("show").style.display = "block";
    document.getElementById("eid").innerHTML = "EID MUBARAK!";
  }
}, 10);