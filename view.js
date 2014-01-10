//
// Based on: http://james.padolsey.com/javascript/bujs-1-getparameterbyname/
//
function getParam( name ) {
  var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
  return match && decodeURIComponent(match[1]);
}

var url = getParam( 'url' ), w;

//
// Retrieve image dimensions and activate zoom slider
//
(function () {
  var img = new Image();
  img.src = url;
  img.onload = function () {
    w = img.width;

    document.getElementById('scale').addEventListener( "change", function( e ) {
      document.body.style.backgroundSize = Math.round(e.target.value * 0.01 * w) + "px";
    } );
  }
})();

//
// Set image as wallpaper
//
document.body.style.background = "url(" + url + ") repeat 0 0";

//
// Activate save button
//
var link = document.getElementById('save');
link.href = url;
link.download = "";