$(document).ready(function() {

  switch (new Date().getDay()) {
      case 0:
          text = "By Appointment Only";
          break;
      case 1:
          text = "Noon - 7PM";
          break;
      case 2:
          text = "Noon - 7PM";
          break;
      case 3:
          text = "10AM - 5PM";
          break;
      case 4:
          text = "By Appointment Only";
          break;
      case 5:
          text = "10AM - 5PM";
          break;
      case 6:
          text = "11AM - 1PM";
          break;
      default:
          text = "hello";
          break;
  }

  document.getElementById("message").innerHTML = 'Today&#39s Staffed Hours: ';
  document.getElementById("hours").innerHTML = text;

});
