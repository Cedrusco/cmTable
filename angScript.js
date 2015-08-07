var fs = require('fs');

var ngComponent = /(\.directive\(\s*(?:\'\w*\'|\"\w*\")\s*,\s*(?:function\s*\(.*\)\s*\{\s*\n\s*\n\}\s*|\[.*function\s*\(.*\)\s*\{\s*\n*\n\}\s*\])\))/g;
var file = process.argv[2];

console.log('Getting file', file);
var fileString = fs.readFileSync(process.argv[2], 'utf-8');
console.log('Got file:', fileString);

console.log('Matches:', fileString.match(ngComponent));

