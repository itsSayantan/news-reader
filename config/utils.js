const fs = require('fs');
const path = require('path');

const copy = () => {
    const srcFileLocation = path.resolve(__dirname, '../public');
    const distFileLocation = path.resolve(__dirname, '../dist');

    fs.exists(distFileLocation, exists => {
        if (exists) {
            fs.copyFileSync(
                srcFileLocation + '/index.html',
                distFileLocation + '/index.html'
            );
        } else {
            fs.mkdir(distFileLocation, err => {
                if (err) throw err;
                fs.copyFileSync(
                    srcFileLocation + '/index.html',
                    distFileLocation + '/index.html'
                );
            });
        }
    });
};

module.exports = {
    copy
};
