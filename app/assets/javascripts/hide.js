function hideWhenClicked() {
  var hide_this = document.getElementById('hide_this');
  var body = document.getElementByTagName('body');
  body.removeChild(hide_this);
}