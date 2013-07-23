var fs = require('fs');

module.exports = function(dir, out) {
  fs.writeFile(out, '<h1>Doctagon</h1>', function(err){
    if(err) throw err;
  });
}