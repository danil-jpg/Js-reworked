 const path = require('path');

 module.exports = {
     entry: "./src/js/index.js",
     output: {
         filename: "bound.js",
         path: path.resolve(__dirname, 'dist'),
     }
 };