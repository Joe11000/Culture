// Most up to date 1.x version of JQuery
// Source http://stackoverflow.com/questions/441412/is-there-a-link-to-the-latest-jquery-library-on-google-apis
(function(){
  var newscript = document.createElement('script');
     newscript.type = 'text/javascript';
     newscript.async = true;
     newscript.src = "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
})();

// $$("#an_id") -> returns an array containing DOM element. Doesn't return jquery element