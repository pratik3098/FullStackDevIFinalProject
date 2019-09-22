/*let fs=require('fs');
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
*/