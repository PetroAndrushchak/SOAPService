var soap = require('soap');
var url = 'http://localhost:8002/mywsdl?wsdl';
var args = { username: 'petroandrushchak' };
var fs = require('fs');
var chance = require('chance').Chance();;

soap.createClient(url, function (err, client) {
    var data = fs.readFileSync(`${__dirname}/pool.jpg`, 'binary')
    var base64ImageData = new Buffer(data, 'binary').toString('base64');
    client.uploadImage({ imageData: base64ImageData, imageType: "jpg", imageName: chance.name() }, function (error, response) {
        console.log("Response after upload image" + response.message);
    });

});

soap.createClient(url, function (err, client) {
    var myJson = { name: 'Petro', lastname: 'Andrushchak' }

    client.logIn({ user: myJson }, function (err, result) {
        console.log("Log in request  " + result.result);
    });
});
