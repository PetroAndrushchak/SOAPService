var fs = require('fs');

exports.writeDataToNewFile = function (data, folderPath, fileName, fileType) {
    return new Promise((resolve, reject) => {
        var buffer = new Buffer(data, 'base64').toString('binary');
        fs.writeFile(`${folderPath}/${fileName}.${fileType}`, buffer, 'binary', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve("File saved !!!!");
            }
        })
    })
}