// step 1 : go to page
 window.location = 'http://int.vibescm.com/app/campaigns';

// step 2 : include jQuery
(function(){
  var newscript = document.createElement('script');
     newscript.type = 'text/javascript';
     newscript.async = true;
     newscript.src = 'http://code.jquery.com/jquery-latest.min.js';
  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
})();


// step 3 : send out ajax commands

$(function(){
  var sendAjaxPostRequest = function(link){
    var xml = new XMLHttpRequest();
    xml.open('post', link, true)
    xml.send();
}

$('tbody:eq(1) td:odd a').each(function(index, object)
{
  // console.log(index)

  var regex_str = object.href
  var id_in_db = (/\/(\d+)$/.exec(regex_str))[1]
  console.log(id_in_db)

  var link = '/app/campaigns/end_now/' + id_in_db

  // console.log(link)
  window.setTimeout(sendAjaxPostRequest, 700);
})();


// window.location = '/app/campaigns/end_now' + /\/(\d+)$/.exec($$('#campaigns > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > a')[0].href)[0]