

var input = document.querySelector(".amount");
//var address = document.querySelector(".address");
var button = document.querySelector(".btn");
var public = document.querySelector(".public");
var showPrivateKey = document.querySelector(".showprivate");
var PrivateKey = document.querySelector(".private");
var network = document.querySelector(".network");
var balanceEth = document.querySelector(".balanceEth");
var balanceUsd = document.querySelector(".balanceUsd");
var balanceBtc = document.querySelector(".balanceBtc");

/*input.addEventListener("click", function(){
    alert('Enter the right amount');
})

//address.addEventListener("click", function () {
   // alert('Enter the right address please');
//})

button.addEventListener("click", function () {
    alert('Are you sure of this transction');
})
    
public.addEventListener("click", function () {
    alert('This is your address');
})
showPrivateKey.addEventListener("click", function () {
    alert('Show private key');
})

PrivateKey.addEventListener("click", function () {
    alert('private key');
})
network.addEventListener("click", function () {
    alert('network');
})
balanceEth.addEventListener("click", function () {
    alert('eth');
})
balanceUsd.addEventListener("click", function () {
    alert('usd');
})
balanceBtc.addEventListener("click", function () {
    alert('btc');
})
*/

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.hidden =false
    popup.classList.toggle("show");
  }


