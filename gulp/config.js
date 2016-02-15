var src     = 'source/';      // 元ファイル
var dist    = 'dist/';     // コンパイル先

// root path
var root = require( 'path' ).join( __dirname, '../' );

module.exports = {
  // root
  'root' : root,

  'src': {
    'root'  : src,
    'html'  : src,
    'css'   : src + 'stylesheets/',
    'img'   : src + 'images/',
    'sprite': src + 'materials/_sprites/*.png',
    'js'    : src + 'javascripts/'
  },

  'dist': {
    'root'  : dist,
    'html'  : dist,
    'css'   : dist + 'stylesheets/',
    'img'   : dist + 'images/',
    'sprite': dist + 'materials/',
    'js'    : dist + 'javascripts/'
  }

};