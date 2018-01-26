var fs = require('fs');
var express = require("express");
var soap = require('soap');
var app = express();
var fileHelper = require('./helpers/fileHelper.js');

var server = {
    MyServer: {
        MyPort: {
            logIn: function (args) {
                console.log("log in.... " + args.user);
                return { result: "Logged in" };
            },
            uploadImage: function (args, callback) {
                fileHelper.writeDataToNewFile(args.imageData,`${process.cwd()}/server/uploadedPhotos` , args.imageName, args.imageType).then(messsage => {
                    callback(null, {message : messsage});
                })
            }
        }
    }
};

var myWSDL = fs.readFileSync(`${process.cwd()}/server/myWSDL.wsdl`, 'utf8');

app.listen(8002, () => {
    console.log("Server has been started on 8002 port");
    soap.listen(app, '/mywsdl', server, myWSDL);
})
