//
// Based on: http://james.padolsey.com/javascript/bujs-1-getparameterbyname/
//
function getParam( name ) {
  var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
  return match && decodeURIComponent(match[1]);
}

document.body.style.background = "url(" + getParam( 'url' ) + ") repeat 0 0";