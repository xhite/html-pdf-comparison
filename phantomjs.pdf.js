'use strict'

const pdf = require('phantomjs-pdf');

const options = {
    "html": "index.html",
    "css": "main.css",
    "paperSize": {
        format: 'A4',
        orientation: 'portrait',
        border: '1cm'
    },
    "deleteOnAction": true
};

pdf.convert(options, function(result) {
    result.toFile("index.phantomjs.pdf", function() {});
});
