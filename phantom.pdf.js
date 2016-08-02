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
const svgUrl = 'http://bl.ocks.org/mbostock/raw/4063318/c0923c4d3d8a6b693bb5c384bce33fc0374486f2/';
