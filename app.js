console.log("App code here");
let publicKey=document.getElementById("public-key");
let response={
    name: "Jack",
    key: "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a",
    balance: "100"
};
let response2= function fetchData(){
let res;
axios.get('https://api.etherscan.io/api?module=account&action=balance&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&tag=latest&apikey=YourApiKeyToken')
.then(function (response1) {
    
    console.log(response1.data);
     res=JSON.parse(response1);
})
.catch(function (error) {
    // handle error
    console.log(error);
    res=null
});
 console.log(res.data);
 return res;
}

console.log(response2.name);

function showPublicKey(){
    document.getElementById("public-key").innerHTML=response.key;
}

function showName(){
    document.getElementById("name").innerHTML=response.name;
}

function showBalance(){
    document.getElementById("balance").innerHTML=response.balance;
}

