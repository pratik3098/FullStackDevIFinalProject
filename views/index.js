
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function msgboxfunc(){
  var alert = document.getElementById("msgbox1")
  var privateKey = document.getElementsByName("privateKey")
  var seed = document.getElementsByName("seed")
  if(seed.value=="" && privateKey.value=="")
  alert.hidden=false
 }