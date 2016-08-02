'use strict';

const fs = require('fs');
const nunjucks = require('nunjucks');
const juice = require('juice');
const inliner = require('inline-resource');
const inlineCss = require('inline-css');
const jsonFileName = process.argv[2] || './sheet/data-mock.json';

const data = require(jsonFileName);

nunjucks.configure({ autoescape: true });

const result = nunjucks.render('./sheet/sheet.njk', data);

fs.writeFile('sheet/sheet.html', result);

process.stdout.write(result);
