//remove crap preventing me from reading ChicagoTribune.com

(function(){
  var newscript = document.createElement('script');
     newscript.type = 'text/javascript';
     newscript.async = true;
     newscript.src = 'http://code.jquery.com/jquery-latest.min.js';
  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
})();
//http://stackoverflow.com/questions/441412/is-there-a-link-to-the-latest-jquery-library-on-google-apis
// https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.13/jquery-ui.min.js


$('.dialog-wrapper.flexible-registration-modal').remove()
$('#dialog-overlayed').remove()
$('body').css({'overflow': 'scroll', 'height': screen.height})





//scrolling help -> http://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
 // close....but won't scroll
// $$('.default_wide.trb_meteringService_container')[0].remove()
// $$('#dialog-overlayed')[0].remove()

// $$('body')[0].style.overflow-y = 'scroll';
// $$('body')[0].style.height = screen.height;
