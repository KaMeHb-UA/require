
const $ = require('https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js');
exports.$ = $;
/*
Works too
module.exports = {
    $
}

Be careful to not to replace exports!
THIS WILL NOT WORK PROPERTLY. SEE Node.js's MODULE STRUCTURE
exports = {
    $
}
*/
