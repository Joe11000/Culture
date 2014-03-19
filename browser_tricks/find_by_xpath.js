// found alternative...DOESN'T NEED JQUERY
// $x("xpath_here")

var findByXPATH = function(path) {
  var element = document.evaluate( path ,document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue;
  if (element != null) {
    element.value = '...';
  }
  return element
}
