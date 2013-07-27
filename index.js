var fs = require('fs')
  ,path = require('path')
  ,cheerio = require('cheerio')
  ,markdown = require('markdown').markdown
  ,walkdir = require('walkdir')
  ,jsFile = './doc.js';

module.exports = function(dir, out, complete) {
  projectName = path.basename(dir);
  var $ = setupDoc(projectName);
  buildSections(dir, $, function($){
    var html = $.html();
    fs.writeFile(path.resolve(out), html, function(err){
      if(err) throw err;
      complete();
    });
  });
}

var setupDoc = function(name){
  var $ = cheerio.load('<html></html>');
  $('html').append('<head></head>');
  $('head').append('<link rel="stylesheet" type="text/css" href="bootstrap.min.css">')
  $('head').append('<link rel="stylesheet" href="http://yandex.st/highlightjs/7.3/styles/default.min.css">')
  $('head').append('<script src="http://yandex.st/highlightjs/7.3/highlight.min.js"></script>')
  $('html').append('<body style="max-width:700px;margin-left:auto;margin-right:auto"></body>');
  $('head').append('<title>'+name+'</title>');
  $('body').append('<h1>'+name+'</h1>');
  $('body').append('<hr>');
  $('body').append('<div id="toc"><div id="tree"></div></div>');
  $('body').append('<hr>');
  $('body').append('<div id="content"></div>');
  $('body').append('<hr>');
  $('body').append('<div><p align="center">generated by doctagon</p></div>');
  return $;
}

var buildSections = function(root, $, done) {
  var paths = walkdir.sync(root);
  var dirs = [];
  var files = [];
  for(var p in paths){
    if(path.basename(paths[p]) != '.DS_Store'){
      var basename = path.basename(paths[p]).split('-')[1];
      var id = basename.split(' ').join('');
      if(fs.lstatSync(paths[p]).isDirectory()){
        $('div#toc').append('<div><b>'+basename+'</b></div>');
        $('div#content').append('<div id="'+basename+'"><h2>'+basename+'</h2></div>')
      }
      else{
        var fileName = basename.replace('.markdown','');
        //console.log(basename)
        //fileName = fileName.split('-')[1];
        id = fileName.split(' ').join('');
        $('div#toc').append('<div><a href="#'+id+'">'+fileName+'</div>');
        $('div#content').append('<div id="'+id+'"><h3>'+fileName+'</h3></div>')
        var markdownContent = fs.readFileSync(paths[p], 'utf8');
        $('div#'+id).append('<p>'+markdown.toHTML(markdownContent)+'</p>')
      }
    }
  }
  done($);
}

