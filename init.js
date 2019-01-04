chrome.contextMenus.create( {
  title: "Test wallpaper",
  contexts: ["image"],
  onclick: clicked,
  documentUrlPatterns: [
    "http://*/*",
    "https://*/*",
    "ftp://*/*",
    "file:///*"
  ]
} );

function clicked( info ) {
  chrome.tabs.create( {
    url: chrome.extension.getURL( 'view.html?url=' + encodeURIComponent( info.srcUrl ) )
  } );
}
