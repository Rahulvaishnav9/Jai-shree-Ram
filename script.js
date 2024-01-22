var i = 0;
var txt1 =
  "राज तिलक की करो तैयारी > << आ रहे हैं भगवा धारी  > << राज तिलक की करो तैयारी  ! > आ रहे हैं भगवा धारी..! >  <<चप्पा चप्पा गूंजेगा श्रीराम के जयकारो से !> < पूरा भारत भर जाएगा राम के दीवानों से  ";
var speed = 90;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += " ";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
