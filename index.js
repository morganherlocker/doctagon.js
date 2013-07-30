var fs = require('fs-extra')
  ,path = require('path')
  ,cheerio = require('cheerio')
  ,markdown = require('markdown').markdown
  ,walkdir = require('walkdir')
  ,async = require('async')
  ,jade = require('jade')
  ,jadeFile = __dirname+'/index.jade';

exports.doctagon = function(dir, out, complete) {
  async.series([
    function(callback){
      setupDirs(dir, out, function() {
        callback();
      });
    },
    function(callback){
      createDoc(dir, function(doc) {
        renderDoc(path.basename(dir), doc, function(html) {
          fs.writeFile(out + '/' + path.basename(dir) + '.html', html, function(err){
            if(err) throw err;
            callback();
          })
        });
      });
    },
  ], function(err, results){
    complete();
  });
}

var setupDirs = exports.setupDirs = function(dir, out, done) {
  projectName = path.basename(dir);
  fs.remove(out, function(err){
    if(err) throw err;
    fs.mkdir(out, function(err){
      if(err) throw err; 
      async.parallel([
        function(callback){
          fs.mkdir(out+'/css', function(){
            callback();
          });
        },
        function(callback){
          fs.mkdir(out+'/js', function(){
            callback();
          });
        },
        function(callback){
          fs.mkdir(out+'/img', function(){
            callback();
          });
        },
        function(callback){
          fs.mkdir(out+'/vid', function(){
            callback();
          });
        }
      ], function(err, results) {
        if(err) throw err;
        done();
      });
    });
  });
}

var createDoc = exports.createDoc = function(dir, done) {
  var doc= {
    dirs: [], 
    files: []
  };
  var paths = walkdir.sync(dir);
  for(var p in paths){
    if(path.basename(paths[p]) != '.DS_Store'){
      if(fs.lstatSync(paths[p]).isDirectory()){
        doc.dirs.push({
          name: path.basename(paths[p]).split('-')[1],
          path: paths[p],
        });
      }
      else{
        var markdownContent = fs.readFileSync(paths[p], 'utf8');
        doc.files.push({
          name: path.basename(paths[p]).split('-')[1].replace('.md',''),
          path: paths[p],
          id: path.basename(paths[p]).split('-')[1].replace('.md','').split(' ').join(''),
          content: markdown.toHTML(markdownContent)
        });
      }
    }
  }
  done(doc);
}

var renderDoc = exports.renderDoc = function(name, doc, done) {
  var html = jade.renderFile(jadeFile, {name: name, doc: doc});
  done(html);
}

