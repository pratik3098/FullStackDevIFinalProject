let fs=require('fs');
function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            let object = JSON.parse(fileData);
            return cb && cb(null, object);
        } catch(err) {
            return cb && cb(err);
        }
    })
}
jsonReader('./database.json', (err, customer) => {
    if (err) {
        console.log(err);
        return;
    }
    customer.forEach(element => {
        console.log(JSON.stringify(element)); // => "Infinity Loop Drive"
    });
   
})
console.log("Name:" + customers[0].name);
function showFields(){
let response={
      
        name: "Jack",
        key: "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a",
        balance: "100"
};
//document.getElementById("public-key").innerHTML=response.key;

document.getElementById("name").innerHTML=response.name;
document.getElementById("balance").innerHTML=response.balance;

}